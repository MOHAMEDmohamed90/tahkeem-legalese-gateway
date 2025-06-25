
import React, { useCallback, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Upload, File, X, HelpCircle, FileText, Image, FileCheck } from 'lucide-react';

interface StepFiveProps {
  form: UseFormReturn<any>;
}

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  preview?: string;
}

export const StepFive: React.FC<StepFiveProps> = ({ form }) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [uploadProgress, setUploadProgress] = useState<{[key: string]: number}>({});

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  }, []);

  const handleFiles = async (files: File[]) => {
    for (const file of files) {
      if (file.size > 10 * 1024 * 1024) { // 10MB limit
        alert(`الملف ${file.name} كبير جداً. الحد الأقصى 10 ميجابايت.`);
        continue;
      }

      const fileId = Math.random().toString(36).substr(2, 9);
      const newFile: UploadedFile = {
        id: fileId,
        name: file.name,
        size: file.size,
        type: file.type,
      };

      // Add to uploaded files
      setUploadedFiles(prev => [...prev, newFile]);

      // Simulate upload progress
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 30;
        if (progress >= 100) {
          progress = 100;
          clearInterval(interval);
        }
        setUploadProgress(prev => ({ ...prev, [fileId]: Math.round(progress) }));
      }, 200);
    }
  };

  const removeFile = (fileId: string) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== fileId));
    setUploadProgress(prev => {
      const newProgress = { ...prev };
      delete newProgress[fileId];
      return newProgress;
    });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 بايت';
    const k = 1024;
    const sizes = ['بايت', 'كيلوبايت', 'ميجابايت', 'جيجابايت'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) return Image;
    if (type.includes('pdf')) return FileText;
    return File;
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-xl font-semibold arabic-text">رفع المستندات</h3>
        <p className="text-muted-foreground">
          أرفق المستندات المتعلقة بالقضية (اختياري)
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 arabic-text">
            المستندات المساعدة
            <Tooltip>
              <TooltipTrigger>
                <HelpCircle className="w-4 h-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                <div className="max-w-xs space-y-2">
                  <p>يمكنك رفع المستندات التالية:</p>
                  <ul className="text-sm list-disc list-inside space-y-1">
                    <li>العقود والاتفاقيات</li>
                    <li>المراسلات ذات الصلة</li>
                    <li>الفواتير والإيصالات</li>
                    <li>الصور والمخططات</li>
                    <li>أي مستندات أخرى مفيدة</li>
                  </ul>
                  <p className="text-xs text-muted-foreground">
                    الحد الأقصى: 10 ميجابايت لكل ملف
                  </p>
                </div>
              </TooltipContent>
            </Tooltip>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div
            className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              dragActive 
                ? 'border-primary bg-primary/5' 
                : 'border-muted-foreground/25 hover:border-primary/50'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <h4 className="text-lg font-medium mb-2 arabic-text">
              اسحب وأفلت الملفات هنا
            </h4>
            <p className="text-muted-foreground mb-4">
              أو انقر لاختيار الملفات من جهازك
            </p>
            <input
              type="file"
              multiple
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={(e) => e.target.files && handleFiles(Array.from(e.target.files))}
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.txt"
            />
            <Button type="button" variant="outline">
              اختيار الملفات
            </Button>
            <p className="text-xs text-muted-foreground mt-2">
              PDF, DOC, JPG, PNG حتى 10 ميجابايت
            </p>
          </div>

          {uploadedFiles.length > 0 && (
            <div className="mt-6 space-y-3">
              <h5 className="font-medium arabic-text">الملفات المرفوعة</h5>
              {uploadedFiles.map((file) => {
                const FileIcon = getFileIcon(file.type);
                const progress = uploadProgress[file.id] || 0;
                
                return (
                  <div key={file.id} className="flex items-center gap-3 p-3 border rounded-lg">
                    <FileIcon className="w-5 h-5 text-muted-foreground" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{file.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {formatFileSize(file.size)}
                      </p>
                      {progress < 100 && (
                        <Progress value={progress} className="w-full mt-1 h-1" />
                      )}
                    </div>
                    {progress === 100 && (
                      <FileCheck className="w-4 h-4 text-green-600" />
                    )}
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFile(file.id)}
                      className="text-muted-foreground hover:text-destructive"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
