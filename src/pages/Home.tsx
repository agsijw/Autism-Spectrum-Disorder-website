import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Book, MapPin, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  const faqs = [
    {
      question: "كيف يمكنني الحصول على استشارة متخصصة؟",
      answer: "هذه الخدمة غير متوفرة حالياً. نحن نعمل على توفير استشارات متخصصة في المستقبل. يرجى متابعة الموقع للحصول على تحديثات حول هذه الخدمة."
    },
    {
      question: "هل تقدمون خدمات التشخيص؟",
      answer: "لا، موقعنا يقدم معلومات تثقيفية فقط ولا يقدم خدمات التشخيص. يجب استشارة متخصصين مؤهلين للحصول على تشخيص دقيق لاضطراب طيف التوحد."
    },
    {
      question: "هل تنظمون ورش عمل أو دورات تدريبية؟",
      answer: "هذه الخدمة غير متوفرة حالياً. قد نعمل للتنظيم ورش عمل ودورات تدريبية في المستقبل. يرجى متابعة الموقع للحصول على تحديثات حول هذه الخدمة."
    },
    {
      question: "هل يمكنني المشاركة في تطوير المحتوى على الموقع؟",
      answer: "نعم، نرحب بمشاركة الخبراء والمتخصصين والأسر في تطوير محتوى الموقع. يمكنك إرسال مقالات، قصص نجاح، أو نصائح من خلال نموذج الاتصال، وسيقوم فريقنا بمراجعتها ونشرها إذا كانت مناسبة."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-32 h-32 border-2 border-white rounded-full transform -translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 border-2 border-white rounded-full transform translate-x-20 translate-y-20"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-5xl font-bold mb-6">معاً لفهم التوحد</h1>
          <p className="text-xl mb-8">منصة متخصصة لدعم وفهم الأشخاص المصابين باضطراب طيف التوحد وتقديم المعلومات والموارد</p>

<div className="flex justify-center gap-4">
  <Link to="/chat" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 inline-block">
    تحدث مع المساعد الذكي
  </Link>
  
  <Link to="/resources" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700">
    استكشف المواد التعليمية
  </Link>
</div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="border-4 border-blue-200 rounded-2xl p-8 bg-white shadow-lg">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-8 relative inline-block">
                  <span className="relative z-10">من نحن</span>
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-blue-200 transform -rotate-1"></div>
                </h2>
                <div className="prose prose-lg mx-auto">
                  <p className="mb-6 text-gray-700">
                    نحن منظمة متخصصة في تقديم الدعم والمساعدة لمجتمعنا. نعمل بجد لتحقيق
                    أهدافنا وخدمة المجتمع بأفضل طريقة ممكنة.
                  </p>
                  <p className="text-gray-700">
                    تأسسنا بهدف إحداث تغيير إيجابي في المجتمع، ونسعى دائماً لتطوير
                    خدماتنا وتوسيع نطاق تأثيرنا.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">خدماتنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/centers" className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">دليل المراكز المتخصصة</h3>
              <p className="text-gray-600">قاعدة بيانات للمراكز المتخصصة في التوحد في المملكة العربية السعودية</p>
            </Link>

            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">المساعد الذكي</h3>
              <p className="text-gray-600">مساعد ذكي مدرب على الإجابة عن الأسئلة المتعلقة بالتوحد</p>
            </div>

            <Link to="/resources" className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">موارد تعليمية</h3>
              <p className="text-gray-600">مقالات ومعلومات توعوية حول التوحد وطرق التعامل معه</p>
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">الأسئلة الشائعة</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="text-xl font-semibold">{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
