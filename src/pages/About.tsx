import React from 'react';

function About() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">من نحن</h1>
        <div className="prose prose-lg">
          <p className="mb-4">
            نحن منظمة متخصصة في تقديم الدعم والمساعدة لمجتمعنا. نعمل بجد لتحقيق
            أهدافنا وخدمة المجتمع بأفضل طريقة ممكنة.
          </p>
          <p className="mb-4">
            تأسسنا بهدف إحداث تغيير إيجابي في المجتمع، ونسعى دائماً لتطوير
            خدماتنا وتوسيع نطاق تأثيرنا.
          </p>
        </div>
      </div>
    </main>
  );
}

export default About;