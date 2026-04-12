import React, { useState } from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

function Centers() {
  const centers = [
    {
      name: 'مركز التميز للتوحد',
      city: 'الرياض',
      website: 'https://acesaudi.org/',
      mapLink: 'https://goo.gl/maps/THTr3dijd1zdm2AJ9',
      phone: '920011452',
      services: ['جلسة استشارية', 'الجلسات العلاجية', 'جلسات التقييم الأسري']
    },
    {
      name: 'مركز احتواء',
      city: 'الرياض: الدرعية',
      website: 'https://ehtiwa.com',
      mapLink: 'https://maps.app.goo.gl/hvZDzkpD7JQ76cpT8',
      phone: '920027225',
      services: ['التشخيص والتقييم', 'الدعم الاكاديمي','العلاج النفسي','العلاج التوحد']
    },
    {
      name: 'مركز أبطال المعرفة',
      city: 'الرياض',
      website: 'https://abtalalmarefah.com',
      mapLink: 'https://maps.app.goo.gl/zT6o2C8PTpHGUgGC6',
      phone: '0112967611 / 0556976668',
      services: ['التشخيص', 'العلاج السلوكي', 'التدريب المهني']
    },
    {
      name: 'مركز التوحد بمستشفى الملك فيصل التخصصي',
      city: 'الرياض',
      website: 'https://www.kfshrc.edu.sa',
      mapLink: 'https://maps.app.goo.gl/uHizTDqc7t2y1sGw9',
      phone: '199019',
      services: ['التشخيص', 'العلاج', 'البحوث']
    },
    {
      name: 'الجمعية السعودية للتوحد',
      city: 'الرياض',
      website: 'https://saautism.org.sa',
      mapLink: 'https://maps.app.goo.gl/5e6eWqyoDwauiwf67',
      phone: '920015045',
      services: ['التوعية', 'وحدة التدخل المبكر','وحدة العيادة الشاملة لتشخيص التوحد', 'التدريب']
    },
    {
      name: 'جمعية أسر التوحد',
      city: 'فروع متعددة',
      website: 'https://saf.org.sa',
      mapLink: 'https://saf.org.sa/map',
      phone: '920006607',
      services: ['تبنى البرامج والمبادرات التي تخدم ذوي اضطراب طيف التوحد واسرهم', 'تسهيل الخدمات المقدمة في مجال التوحد', 'تأهيل المختصين والعاملين في المجال']
    },
    {
      name: 'مركز علي التميمي للتوحد',
      city: 'القصيم',
      website: 'https://www.onaizah.org.sa',
      mapLink: 'https://maps.app.goo.gl/2ttM28jC5RTsemwLA',
      phone: '920020293',
      services: ['علاج النطق', 'التأهيل', 'العلاج السلوكي']
    },
    {
      name: 'مركز شمعة التوحد للتأهيل',
      city: 'الدمام',
      website: 'http://shamah-autism.com.sa',
      mapLink: 'https://maps.app.goo.gl/ovthVxrRyzvWy8rL7',
      phone: '0530757200 / 0555992948 / 0530739770',
      services: ['خطط تأهيل فردية','جلسات التدخل السلوكي','تنمية المهارات الأكاديمية', 'العلاج النطقي']
    },
    {
      name: 'جمعية المدينة للتوحد - تَمَكن',
      city: 'المدينة المنورة',
      website: 'https://tamakkon.org.sa',
      mapLink: 'https://maps.app.goo.gl/w4FB3JE73jPh6Aju6',
      phone: '920006076',
      services: ['توعيت المجتمع عن التوحد', 'تمكين فئة التوحد من المشاركة في المجتمع', 'تطوير العاملين من فاة التوحد']
    }
  ];

  const [selectedCity, setSelectedCity] = useState('');
  const [filteredCenters, setFilteredCenters] = useState(centers);

  const handleSearch = () => {
    if (selectedCity === '') {
      setFilteredCenters(centers);
    } else {
      setFilteredCenters(centers.filter(center => center.city === selectedCity));
    }
  };

  const cities = [...new Set(centers.map(center => center.city))].sort();

  return (
    <div id="centers" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">المراكز الصحية المختصة بالتوحد</h2>
        <p className="text-center mb-8 text-gray-600">يمكنك البحث عن المراكز الصحية المختصة بالتوحد في المملكة العربية السعودية. اختر المدينة للحصول على معلومات المراكز المتخصصة في منطقتك.</p>
        
        <div className="mb-8 flex justify-center">
          <select 
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="px-4 py-2 border rounded-lg w-64 ml-4"
          >
            <option value="">جميع المدن</option>
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
          <button 
            onClick={handleSearch}
            className="bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700"
          >
            بحث
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCenters.map((center, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">{center.name}</h3>
              <p className="flex items-center mb-4 text-gray-600">
                <MapPin className="w-5 h-5 ml-2" />
                المدينة: {center.city}
              </p>
              <p className="mb-4 text-gray-600">
                الهاتف: {center.phone}
              </p>
              <div className="mb-4">
                <strong className="block mb-2">الخدمات:</strong>
                <ul className="list-disc list-inside text-gray-600">
                  {center.services.map((service, idx) => (
                    <li key={idx}>{service}</li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-4">
                {center.website && (
                  <a 
                    href={center.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <ExternalLink className="w-5 h-5 ml-1" />
                    زيارة الموقع
                  </a>
                )}
                <a 
                  href={center.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-800"
                >
                  <MapPin className="w-5 h-5 ml-1" />
                  عرض على الخريطة
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Centers;