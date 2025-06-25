
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export const ReviewSection = () => {
  const reviews = [
    {
      id: 1,
      name: "سارة أحمد",
      nameEn: "Sarah Ahmed",
      rating: 5,
      date: "2024-01-15",
      comment: "محكم ممتاز وعادل، تم حل النزاع بطريقة مهنية ومتوازنة. أنصح بالتعامل معه.",
      avatar: "/placeholder.svg"
    },
    {
      id: 2,
      name: "محمد الخالدي",
      nameEn: "Mohammed Al-Khalidi",
      rating: 5,
      date: "2024-01-10",
      comment: "خبرة واسعة وتعامل محترف. كان قراره عادلاً ومدروساً بعناية.",
      avatar: "/placeholder.svg"
    },
    {
      id: 3,
      name: "فاطمة النعيمي",
      nameEn: "Fatima Al-Nuaimi",
      rating: 4,
      date: "2024-01-05",
      comment: "تجربة إيجابية، المحكم متمكن من القانون ويتعامل بمهنية عالية.",
      avatar: "/placeholder.svg"
    }
  ];

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="arabic-text">التقييمات والمراجعات</CardTitle>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(averageRating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            {averageRating.toFixed(1)} من 5 ({reviews.length} تقييم)
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="border-b border-gray-100 pb-4 last:border-b-0">
              <div className="flex items-start gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={review.avatar} alt={review.name} />
                  <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium arabic-text">{review.name}</h4>
                    <span className="text-xs text-muted-foreground">
                      {new Date(review.date).toLocaleDateString('ar-AE')}
                    </span>
                  </div>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < review.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground arabic-text leading-relaxed">
                    {review.comment}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
