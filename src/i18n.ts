import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        home: {
          title: "home",
          name: "ABD ALHAMED ALBAHBAH",
          info: `Interior Designer And Architect`,
          moreInfo:
            "who has a unique vision of the perspective of beauty as an art, and his diligence in searching for this beauty and embodying his spirit to make every corner and every spot a story to tell. We believe in this saying",
          inspiration:
            "“ Don't go where the road might lead, go instead and leave a trail ” ",
          inspirationOwner: "Ralph Waldo Emerson",
          aboutBtn: "more",
          companiesBtn: "Companies",
        },
        contact: {
          title: "contact us",
        },
        companies: {
          title: "companies",
        },
        about: {
          title: "About ABD ALHAMED",

          titleI: "Who Is ABD ALHAMED ALBAHBAH",
          infoI:
            "Abdulhamid Albahbah, born in 1993 in Derna - Libya, is an interior designer, founder, and General Director of AB Group. He obtained many academic certificates in several fields, the most important of which are interior design, architecture, and human development certificates from the United Nations Institute. Project management and marketing from the Canadian Institute of Dr. Ibrahim Alfaqeeh. He obtained an MBA Business Administration Diploma from the American Institute. Obtained many Certificates of Appreciation in the field of interior design and architecture. Participated in many local and international exhibitions in several different countries such as Italy, Netherlands, and Turkey.",
          titleII: "His main objective",
          infoII:
            "promote the interior design and architecture industry and to raise public taste. His goals emerge from his understanding of the importance of the field of interior design and architecture, and to shed more light on it in the Middle East by spreading this culture to enable those interested in these fields to upgrade themselves and gain trust to reach their ambitions.To prove that the countries of the Middle East have talents and sparkling minds capable of succeeding and excelling globally.AB Group's vision is to spread this culture by helping students and trainees through training courses and workshops.",
          titleIII: "Content Maker",
          infoIII:
            "Through the work of designer / Abdulhamid Al-Bahbah and his interest in presenting and explaining his works and ideas on social media, he has become one of the most important content makers worldwide. He recently won an honoring award from the Arab Content Makers Forum in2022. His method was characterized by the preparation of videos in which he introduces and explains targeted and innovative ideas in his field that can be implemented simply, in addition to shedding light on the flaws that must be avoided and giving appropriate solutions.",
        },
        works: {
          title: "Works",
          info: "Although AB Group was founded recently in both the Libyan and international markets, in a period that did not exceed five years, it was able, during its existence, to preserve its position among the major companies operating in the same  field. And its star shone as a milestone in the field of design and one of the most significant companies with its style It has the skills of staff that transfer designs into reality with great professionalism to create a landmark towards progress and excellence and make a world-renowned brand. The company's record is fruitful of completed works that were implemented over the past years, as well as many works and projects which are still under implementation. Below is a list of the most important projects that the company has implemented in both the Interior and Architectural Design Departments in the recent period in Libya, Dubai, Egypt, Turkey, and Tunisia",
          work1: {
            title: "Modern GAM Project",
            content:
              "Design of a three-story residential villa in Libya, characterized by a modern spirit and artistic pieces of furniture. The illustrations show the games room on the entertainment floor to provide luxurious life accessories, according to the modern design standards",
            country: "Libya",
          },
          work2: {
            title: "BOH Luxury Apartment Project",
            content:
              "Design of a residential villa in Egypt consisting of a ground floor. The design was inspired by the lifestyle of the owner, as he is a prominent personality and has a special social position in the community. So we adopted the eclectic design style dominated by the modern spirit",
            country: "Egypt",
          },
          work3: {
            title: "TARQ Villa Proportions Project",
            content:
              "Art and artists have a special place in general, because of their sense and taste for the smallest details. This project is considered one of the most magnificent projects that we have implemented in Libya. Designed in an eclectic design style, it carries a loaded artistic touch that is embodied in the design. The pictures show the living room",
            country: "Libya",
          },
          work4: {
            title: "KM eclectic Apartment Project",
            content:
              "As part of the design of a residential apartment in Tunisia, this project was implemented in the (industrial) style. A special order of furniture was made in Italy tailored to the client",
            country: "Tunisia",
          },
          work5: {
            title: "PS New classic Apartment Project",
            content:
              "The neo-classical design pattern was adopted according to the client’s need, and to add more modernity, we used soft colors to give an astonishing contrast and to make the finishing touch",
            country: "Turkey",
          },
          work6: {
            title: "HT eclectic Apartment Project",
            content:
              "Design a residential apartment in Dubai by adopting the minimalist style according to the client’s personality. This design is characterized by its soft and neutral colors as a whole. This is shown through the floors and walls. As a style that relies on minimizing furniture and accessories, it is considered one of the most desired styles in the present time and it is adopted by many celebrities such as Kim Kardashian",
            country: "Dubai",
          },
          work7: {
            title: "MB Modern Villa Project",
            content:
              "The client, who is a former member of the Libyan Parliament, asked that the design be luxurious. So we adopted the Modern design style. And to make something out of the ordinary; the dark orange color was used as it is the client’s preferred color",
            country: "Libya",
          },
          btn: "reed more",
        },
      },
    },
    ar: {
      translation: {
        home: {
          title: "الرئيسية",
          name: "عبد الحميد البحباح",
          info: "مصمم داخلي ومهندس معماري",
          moreInfo: `الذي لديه نظرة فريدة من نوعها لـ"منظور الجمال كفن"، واجتهاده في البحث لهذا الجمال وتجسيد روحه ليصنع كل ركن وكل بقعة قصة تروى. ونحن نؤمن بهذا القول
          `,
          inspiration: `“ لا تذهب إلى حيث يقودك الطريق, اذهب حيث لا يوجد طريق واترك أثراً ”`,
          inspirationOwner: "رالف والدو إيمرسون",
          aboutBtn: "المزيد",
          companiesBtn: "الشركات",
        },
        contact: {
          title: "تواصل معنا",
        },
        companies: {
          title: "الشركات",
        },
        about: {
          title: "عن عبد الحميد",
          titleI: "من هو عبد الحميد بحباح",
          infoI:
            "عبد الحميد البباحة من مواليد 1993 بمدينة درنة - ليبيا، مصمم ديكور داخلي، المؤسس والمدير العام لمجموعة AB. حصل على العديد من الشهادات الأكاديمية في عدة مجالات أهمها وهي شهادات التصميم الداخلي والهندسة المعمارية والتنمية البشرية من معهد الأمم المتحدة. إدارة وتسويق المشاريع من المعهد الكندي للدكتور ابراهيم الفقيه. حصل على دبلومة إدارة الأعمال MBA من المعهد الأمريكي. حصل على العديد من شهادات التقدير في مجال التصميم الداخلي و بنيان. شارك في العديد من المعارض المحلية والدولية في عدة معارض مختلفة دول مثل إيطاليا وهولندا وتركيا.",
          titleIII: "صانع محتوى",
          infoIII:
            "من خلال أعمال المصمم عبدالحميد البحبح واهتمامه بعرض أعماله وشرحها والأفكارعلى وسائل التواصل الاجتماعي، أصبح واحدا من أهم صانعي المحتوى على مستوى العالم. هو مؤخرا حصل على جائزة تكريمية من صناع المحتوى العرب المنتدى في 2022.   يقوم بإعداد فيديوهات حيث يتم  فيها التعريف والشرح للأفكار المستهدفة والمبتكرة في مجاله التي يمكن أن يمكن تنفيذها ببساطة، بالإضافة إلى تسليط الضوء على العيوب التي يجب تجنبها وإعطاء الحلول المناسبة وهي شهادات التصميم الداخلي والهندسة المعمارية والتنمية البشرية من معهد الأمم المتحدة. إدارة وتسويق المشاريع من المعهد الكندي للدكتور ابراهيم الفقيه. حصل على دبلومة إدارة الأعمال MBA من المعهد الأمريكي. حصل على العديد من شهادات التقدير في مجال التصميم الداخلي و بنيان.شارك في العديد من المعارض المحلية والدولية في عدة معارض مختلفة دول مثل إيطاليا وهولندا وتركيا.",
          titleII: "هدفه الرئيسي",
          infoII:
            "تعزيز التصميم الداخلي وصناعة الهندسة المعمارية ولرفع الذوق العام . أهدافه تنبع من فهمه لل أهمية مجال التصميم الداخلي والهندسة المعمارية، و تسليط الضوء عليها في الشرق الأوسط من خلال نشرهذه الثقافة لتمكين المهتمين في هذه المجالات للارتقاء بأنفسهم وكسب الثقة للوصول إلى طموحاتهم. أن نثبت أن دول الشرق الأوسط تتمتع بالمواهب والعقول اللامعة قادرة على النجاح والتفوق عالميا. وتتمثل رؤية مجموعة AB في نشر هذه الثقافة من خلال مساعدة الطلاب والمتدربين من خلال الدورات التدريبية وورش العمل",
        },
        works: {
          title: "الأعمال",
          info: "ورغم أن مجموعة AB تأسست مؤخراً في السوقين الليبي والعالمي، في فترة لم تتجاوز الخمس سنوات، إلا أنها استطاعت خلال وجودها أن تحافظ على مكانتها بين كبرى الشركات العاملة في نفس المجال. ولمع نجمها علامة فارقة في مجال التصميم وتعد من أهم الشركات بأسلوبها فهي تمتلك مهارات الموظفين التي تنقل التصاميم إلى واقع باحترافية كبيرة لتصنع علامة فارقة نحو التقدم والتميز وتصنع شهرة عالمية. وسجل الشركة حافل بالأعمال المنجزة التي تم تنفيذها خلال السنوات الماضية، بالإضافة إلى العديد من الأعمال والمشاريع التي لا تزال قيد التنفيذ. وفيما يلي قائمة بأهم المشاريع التي نفذتها الشركة في قسمي التصميم الداخلي والمعماري في الفترة الأخيرة في ليبيا ودبي ومصر وتركيا وتونس",
          work1: {
            title: "مشروع GAM الحديث",
            content:
              "تصميم فيلا سكنية في ليبيا مكونة من ثلاثة طوابق تتميز بالروح العصرية وقطع الأثاث الفنية. وتظهر الرسوم التوضيحية غرفة الألعاب في طابق الترفيه لتوفير إكسسوارات الحياة الفاخرة وفق معايير التصميم الحديثة",
            country: "ليبيا",
          },
          work2: {
            title: "مشروع شقة فاخرة BOH",
            content:
              "تصميم فيلا سكنية في مصر مكونة من دور أرضي. التصميم مستوحى من أسلوب حياة المالك، فهو شخصية بارزة وله مكانة اجتماعية خاصة في المجتمع. لذلك اعتمدنا أسلوب التصميم الانتقائي الذي تهيمن عليه الروح الحديثة.",
            country: "مصر",
          },
          work3: {
            title: "مشروع تقسيمات فيلا طارق",
            content:
              "للفن والفنانين مكانة خاصة بشكل عام، بسبب إحساسهم وذوقهم في أدق التفاصيل. ويعتبر هذا المشروع من أروع المشاريع التي قمنا بتنفيذها في ليبيا. تم تصميمه بأسلوب تصميم انتقائي، وهو يحمل لمسة فنية محملة تتجسد في التصميم. الصور تظهر غرفة المعيشة",
            country: "ليبيا",
          },
          work4: {
            title: "مشروع شقة KM الانتقائي",
            content:
              "في إطار تصميم شقة سكنية في تونس تم تنفيذ هذا المشروع على الطراز (الصناعي). تم تصنيع طلب خاص من الأثاث في إيطاليا خصيصًا للعميل",
            country: "تونس",
          },
          work5: {
            title: "مشروع شقة PS كلاسيكي جديد",
            content:
              "تم اعتماد نمط التصميم الكلاسيكي الجديد حسب حاجة العميل، ولإضفاء المزيد من الحداثة استخدمنا الألوان الناعمة لتعطي تباين مذهل ولإضفاء اللمسة النهائية",
            country: "تركيا",
          },
          work6: {
            title: "مشروع شقة انتقائي HT",
            content:
              "تصميم شقة سكنية في دبي باعتماد الأسلوب البسيط الذي يتناسب مع شخصية العميل. ويتميز هذا التصميم بألوانه الناعمة والمحايدة ككل. ويظهر ذلك من خلال الأرضيات والجدران. كونه أسلوب يعتمد على التقليل من الأثاث والإكسسوارات، فهو يعتبر من أكثر الأساليب المرغوبة في الوقت الحاضر ويتبناه العديد من المشاهير مثل كيم كارداشيان",
            country: "دبي",
          },
          work7: {
            title: "مشروع فيلا إم بي مودرن",
            content:
              "وطلب العميل وهو عضو سابق في البرلمان الليبي أن يكون التصميم فخما. لذلك اعتمدنا أسلوب التصميم الحديث. وأن يصنع شيئًا خارجًا عن المألوف؛ تم استخدام اللون البرتقالي الغامق فهو اللون المفضل للعميل",
            country: "ليبيا",
          },
          btn: "قرائة المزيد",
        },
      },
    },
  },
});

export default i18n;
