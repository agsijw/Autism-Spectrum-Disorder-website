import React from 'react';

function Contact() {
  return (
    <div id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">تواصل معنا</h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mb-8 text-gray-600">
            نحن نسعى للرد على جميع الاستفسارات في أقرب وقت ممكن. جميع الرسائل المرسلة عبر هذا النموذج سيتم توجيهها إلى البريد الإلكتروني: readrex06@gmail.com
          </p>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-gray-700 mb-2">الاسم</label>
              <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">البريد الإلكتروني</label>
              <input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">الرسالة</label>
              <textarea className="w-full px-4 py-2 border rounded-lg h-32 focus:ring-2 focus:ring-blue-500 focus:border-transparent" required></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
              إرسال
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;