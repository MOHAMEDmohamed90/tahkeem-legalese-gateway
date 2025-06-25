
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileText, X } from "lucide-react";

export function DocumentUpload() {
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([
    "عقد الخدمة.pdf",
    "الشكوى الأولية.docx",
  ]);

  const handleFileRemove = (fileName: string) => {
    setUploadedFiles(files => files.filter(f => f !== fileName));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="arabic-text">رفع الوثائق</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-tahkeem-blue-400 transition-colors">
          <Upload className="mx-auto h-12 w-12 text-gray-400 mb-2" />
          <p className="text-sm text-gray-600 arabic-text mb-2">
            اسحب الملفات هنا أو انقر للتحديد
          </p>
          <Button variant="outline" className="arabic-text">
            اختيار الملفات
          </Button>
        </div>
        
        {uploadedFiles.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-semibold arabic-text text-sm">الملفات المرفوعة</h4>
            {uploadedFiles.map((fileName, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-gray-500" />
                  <span className="text-sm arabic-text">{fileName}</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleFileRemove(fileName)}
                  className="h-6 w-6 p-0"
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
