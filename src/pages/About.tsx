import React from 'react';

function About() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">من نحن</h1>
        
        <div className="prose prose-lg text-gray-800 leading-relaxed text-right" dir="rtl">
          <p className="mb-6 text-xl">
            مشروع <span className="font-bold text-blue-600">"معاً"</span> هو مبادرة تقنية فردية تهدف إلى إحداث تغيير إيجابي في حياة الفئات المستهدفة وأسرهم.
          </p>
          
          <p className="mb-6">
            صممتُ هذه المنصة لتوفير أدوات ذكية، مثل المساعد الافتراضي المدعوم بالذكاء الاصطناعي ودليل الخدمات الشامل، لضمان وصول الدعم الصحيح لكل محتاج في الوقت المناسب، وبأفضل جودة ممكنة.
          </p>

          <p>
            تأسست المنصة بهدف تعزيز الوعي المجتمعي وتقديم حلول تقنية مبتكرة تساهم في تحسين جودة حياة الأفراد وتوسيع نطاق الأثر الإيجابي.
          </p>
        </div>
      </div>
    </main>
  );
}

export default About;
