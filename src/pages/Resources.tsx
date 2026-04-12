import React from 'react';
import { ExternalLink } from 'lucide-react';

function Resources() {
  const resources = [
    {
      title: "نماذج تدخل شاملة",
      items: [
        {
          name: "نموذج SCERTS®",
          description: "إطار متكامل يركز على التواصل الاجتماعي وتنظيم العواطف والدعم التبادلي، ويهدف إلى تنسيق أهداف التدخل عبر المنزل والمدرسة",
          link: "https://scerts.com/wp-content/uploads/SCERTS_2pg_3_16.pdf"
        },
        {
          name: "برنامج TEACCH",
          description: "يقدم استراتيجيات تعتمد على التعلم البصري لوضع روتينات مهدئة وتنظيمية تساعد الأفراد المصابين بالتوحد على التعامل مع التغيرات اليومية",
          link: "https://teacch.com/resources/teacch-tips/teacch-tip2-relaxation-strategies-routines/"
        }
      ]
    },
    {
      title: "استراتيجيات تحليل السلوك والتدخل المبكر",
      items: [
        {
          name: "دليل الآباء لتحليل السلوك التطبيقي (ABA)",
          description: "يشرح أساسيات ABA وكيفية تطبيقها لتعزيز السلوكيات المرغوبة وتقليل الصعوبات السلوكية",
          link: "https://www.autismspeaks.org/tool-kit/atnair-p-parents-guide-applied-behavior-analysis"
        },
        {
          name: "تدريب الاستجابة المحورية (PRT)",
          description: "يركز على أربعة محاور أساسية (الدافعية، البدء، الاستجابة للمنبهات المتعددة، وإدارة الذات) باستخدام اهتمامات الطفل لزيادة فعالية التدريب",
          link: "https://www.verywellhealth.com/pivotal-response-training-7561144"
        }
      ]
    },
    {
      title: "وسائل تواصل بصرية وبديلة",
      items: [
        {
          name: "نظام التبادل بالصور (PECS)",
          description: "طريقة تواصل بديلة تساعد الأطفال على التعبير عن رغباتهم واحتياجاتهم عبر تبادل صور منظمة",
          link: "https://pecsusa.com/download/PECS-Brief%20Description-2020-US.pdf"
        },
        {
          name: "الوسائل البصرية",
          description: "تشمل الجداول والبطاقات والصور لتهيئة بيئة تواصل واضحة وتقليل القلق من خلال تسلسل الأنشطة",
          link: "https://vkc.vumc.org/assets/files/resources/visualsupports.pdf"
        }
      ]
    },
    {
      title: "القصص الاجتماعية وتقنيات التواصل",
      items: [
        {
          name: "Social Stories™",
          description: "تقنية تقدم مواقف اجتماعية بصياغة مبسطة تشمل جملًا وصفية وجملًا إرشادية لتعليم الاستجابة المناسبة",
          link: "https://carolgraysocialstories.com/wp-content/uploads/2018/12/Social-Stories-10.2-Criteria.pdf"
        },
        {
          name: "Social Story Sampler",
          description: "مجموعة نماذج جاهزة من القصص الاجتماعية يمكن تعديلها واستخدامها في مواضيع متنوعة بحسب احتياجات الطفل",
          link: "https://carolgraysocialstories.com/social-stories/social-story-sampler/"
        }
      ]
    },
    {
      title: "مصادر معلوماتية عامة",
      items: [
        {
          name: "منظمة الصحة العالمية (WHO)",
          description: "ورقة حقائق عن اضطراب طيف التوحد تتناول التعريف، والانتشار، وخيارات الدعم العالمية",
          link: "https://www.who.int/news-room/fact-sheets/detail/autism-spectrum-disorders"
        },
        {
          name: "الجمعية الوطنية للتوحد",
          description: "دليل استراتيجيات وتدخلات تواصلية وسلوكية وتعليمية مع توصيات وآليات تطبيقية",
          link: "https://www.autism.org.uk/advice-and-guidance/topics/strategies-and-interventions"
        }
      ]
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">الموارد التعليمية</h1>
        <div className="max-w-4xl mx-auto">
          {resources.map((category, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
              <div className="grid gap-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold mb-3">{item.name}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <a 
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2"
                    >
                      اقرأ المزيد
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resources;