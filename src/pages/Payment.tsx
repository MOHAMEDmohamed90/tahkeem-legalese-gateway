
import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCard, Shield, AlertCircle, Info } from "lucide-react";
import { toast } from "sonner";

const currencies = [
  { code: "TND", name: "Tunisian Dinar", symbol: "د.ت", rate: 3.15 },
  { code: "DZD", name: "Algerian Dinar", symbol: "د.ج", rate: 134.5 },
  { code: "MAD", name: "Moroccan Dirham", symbol: "د.م.", rate: 10.2 },
  { code: "LYD", name: "Libyan Dinar", symbol: "د.ل", rate: 4.85 },
  { code: "EGP", name: "Egyptian Pound", symbol: "ج.م", rate: 30.9 },
  { code: "LBP", name: "Lebanese Pound", symbol: "ل.ل", rate: 89500 },
];

const basePricing = {
  serviceFee: 50, // USD
  complexityFee: 25, // USD
  mediatorFee: 100, // USD
};

const Payment = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("TND");
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cryptoWallet, setCryptoWallet] = useState("");

  const currentCurrency = currencies.find(c => c.code === selectedCurrency) || currencies[0];
  
  const convertPrice = (usdAmount: number) => {
    return (usdAmount * currentCurrency.rate).toFixed(2);
  };

  const totalUSD = basePricing.serviceFee + basePricing.complexityFee + basePricing.mediatorFee;
  const totalConverted = convertPrice(totalUSD);

  const handlePayment = () => {
    if (paymentMethod === "credit-card") {
      if (!cardNumber || !expiryDate || !cvv) {
        toast.error("يرجى ملء جميع بيانات البطاقة");
        return;
      }
    } else if (paymentMethod === "crypto") {
      if (!cryptoWallet) {
        toast.error("يرجى إدخال عنوان المحفظة");
        return;
      }
    }
    
    toast.success("تم معالجة الدفع بنجاح");
  };

  return (
    <div className="min-h-screen bg-gradient-section" dir="rtl">
      <SidebarProvider className="direction-rtl">
        <div className="flex flex-row-reverse w-full min-h-screen">
          <AppSidebar />
          
          <main className="flex-1 p-4 overflow-y-auto h-screen">
            <div className="flex items-center gap-4 mb-6">
              <SidebarTrigger />
              <h1 className="text-2xl font-bold arabic-text">الدفع الآمن</h1>
            </div>

            <div className="container mx-auto px-4 max-w-4xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Payment Details */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 arabic-text">
                        <CreditCard className="h-5 w-5" />
                        تفاصيل الدفع
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Currency Selection */}
                      <div>
                        <Label className="arabic-text">العملة</Label>
                        <Select value={selectedCurrency} onValueChange={setSelectedCurrency}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {currencies.map((currency) => (
                              <SelectItem key={currency.code} value={currency.code}>
                                <div className="flex items-center gap-2">
                                  <span className="arabic-text">{currency.name}</span>
                                  <span className="text-muted-foreground">({currency.symbol})</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Payment Method */}
                      <div>
                        <Label className="arabic-text">طريقة الدفع</Label>
                        <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                          <div className="flex items-center space-x-2 space-x-reverse">
                            <RadioGroupItem value="credit-card" id="credit-card" />
                            <Label htmlFor="credit-card" className="arabic-text">بطاقة ائتمان</Label>
                          </div>
                          <div className="flex items-center space-x-2 space-x-reverse">
                            <RadioGroupItem value="crypto" id="crypto" />
                            <Label htmlFor="crypto" className="arabic-text">عملة رقمية</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      {/* Credit Card Form */}
                      {paymentMethod === "credit-card" && (
                        <div className="space-y-4">
                          <div>
                            <Label className="arabic-text">رقم البطاقة</Label>
                            <Input
                              type="text"
                              placeholder="1234 5678 9012 3456"
                              value={cardNumber}
                              onChange={(e) => setCardNumber(e.target.value)}
                              className="text-left"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label className="arabic-text">تاريخ الانتهاء</Label>
                              <Input
                                type="text"
                                placeholder="MM/YY"
                                value={expiryDate}
                                onChange={(e) => setExpiryDate(e.target.value)}
                                className="text-left"
                              />
                            </div>
                            <div>
                              <Label className="arabic-text">CVV</Label>
                              <Input
                                type="text"
                                placeholder="123"
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value)}
                                className="text-left"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Crypto Payment */}
                      {paymentMethod === "crypto" && (
                        <div>
                          <Label className="arabic-text">عنوان المحفظة</Label>
                          <Input
                            type="text"
                            placeholder="Enter wallet address"
                            value={cryptoWallet}
                            onChange={(e) => setCryptoWallet(e.target.value)}
                            className="text-left"
                          />
                          <p className="text-sm text-muted-foreground mt-2 arabic-text">
                            نقبل Bitcoin، Ethereum، و USDT
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Security Notice */}
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-green-600 mt-0.5" />
                        <div>
                          <h4 className="font-semibold arabic-text mb-2">الأمان والحماية</h4>
                          <p className="text-sm text-muted-foreground arabic-text">
                            جميع المدفوعات محمية بتشفير SSL 256-bit. نحن لا نحتفظ ببيانات البطاقات الائتمانية.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Pricing Breakdown */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="arabic-text">تفصيل التكلفة</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="arabic-text">رسوم الخدمة</span>
                          <span>{convertPrice(basePricing.serviceFee)} {currentCurrency.symbol}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="arabic-text">رسوم تعقيد القضية</span>
                          <span>{convertPrice(basePricing.complexityFee)} {currentCurrency.symbol}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="arabic-text">أتعاب المحكم/الوسيط</span>
                          <span>{convertPrice(basePricing.mediatorFee)} {currentCurrency.symbol}</span>
                        </div>
                        <hr />
                        <div className="flex justify-between items-center font-bold text-lg">
                          <span className="arabic-text">المجموع</span>
                          <span>{totalConverted} {currentCurrency.symbol}</span>
                        </div>
                      </div>

                      {/* Exchange Rate */}
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Info className="h-4 w-4" />
                          <span className="text-sm font-medium arabic-text">سعر الصرف</span>
                        </div>
                        <p className="text-sm text-muted-foreground arabic-text">
                          1 USD = {currentCurrency.rate} {currentCurrency.symbol}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1 arabic-text">
                          آخر تحديث: اليوم الساعة 2:30 م
                        </p>
                      </div>

                      <Button 
                        onClick={handlePayment} 
                        className="w-full" 
                        size="lg"
                      >
                        <span className="arabic-text">تأكيد الدفع</span>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Compliance Disclaimer */}
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                        <div>
                          <h4 className="font-semibold arabic-text mb-2">إخلاء المسؤولية</h4>
                          <div className="text-sm text-muted-foreground space-y-2 arabic-text">
                            <p>
                              • جميع الرسوم غير قابلة للاسترداد بعد بدء الخدمة
                            </p>
                            <p>
                              • أسعار الصرف قابلة للتغيير وفقاً لظروف السوق
                            </p>
                            <p>
                              • نحتفظ بالحق في تعديل الرسوم مع إشعار مسبق
                            </p>
                            <p>
                              • الخدمة تخضع لقوانين التحكيم الدولية
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Payment;
