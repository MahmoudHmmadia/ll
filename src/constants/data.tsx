import GlobalContext from "../context/GlobalContext";
import {
  SiGooglemaps,
  SiFacebook,
  SiInstagram,
  SiTiktok,
} from "react-icons/si";
export function useData() {
  const { lan } = GlobalContext();
  const works = [
    {
      id: "1",
      title: WORKS[lan].work1.title,
      country: WORKS[lan].work1.country,
      info: WORKS[lan].work1.content,
      imgSrc1: "/assets/works/gym_l_1.jpeg",
      imgSrc2: "/assets/works/gym_l_2.jpeg",
    },
    {
      id: "2",
      title: WORKS[lan].work2.title,
      country: WORKS[lan].work2.country,
      info: WORKS[lan].work2.content,
      imgSrc1: "/assets/works/lauxury_e_1.jpeg",
      imgSrc2: "/assets/works/lauxury_e_2.jpeg",
    },
    {
      id: "3",
      title: WORKS[lan].work3.title,
      country: WORKS[lan].work3.country,
      info: WORKS[lan].work3.content,
      imgSrc1: "/assets/works/villa_l_1.jpeg",
      imgSrc2: "/assets/works/villa_l_2.jpeg",
    },
    {
      id: "4",
      title: WORKS[lan].work4.title,
      country: WORKS[lan].work4.country,
      info: WORKS[lan].work4.content,
      imgSrc1: "/assets/works/eclectic_t_1.jpeg",
      imgSrc2: "/assets/works/eclectic_t_2.jpeg",
    },
    {
      id: "5",
      title: WORKS[lan].work5.title,
      country: WORKS[lan].work5.country,
      info: WORKS[lan].work5.content,
      imgSrc1: "/assets/works/classic_tu_1.jpeg",
      imgSrc2: "/assets/works/classic_tu_2.jpeg",
    },
    {
      id: "6",
      title: WORKS[lan].work6.title,
      country: WORKS[lan].work6.country,
      info: WORKS[lan].work6.content,
      imgSrc1: "/assets/works/eclectic_d_1.jpeg",
      imgSrc2: "/assets/works/eclectic_d_2.jpeg",
    },
  ];
  const companies = [
    {
      name: COMPANIES[lan].company1.name,
      time: COMPANIES[lan].company1.time,
      address: COMPANIES[lan].company1.address,
      image: COMPANIES[lan].company1.image,
      phone: COMPANIES[lan].company1.phone,
      cover: "assets/company4-cover4.jpg",
      google: "https://maps.app.goo.gl/nxnJoDriUKMpY6HQ7?g_st=iw",
      tiktok: "https://www.tiktok.com/@abdalhmedbahbah?_t=8i4jMdjvQEI&_r=1",
      facebook: "https://www.facebook.com/abdalhmedbahbah?mibextid=LQQJ4d",
      instagram:
        "https://instagram.com/abdalhmedbahbah1?igshid=YTQwZjQ0NmI0OA==",
    },

    {
      image: COMPANIES[lan].company3.image,
      name: COMPANIES[lan].company3.name,
      time: COMPANIES[lan].company3.time,
      address: COMPANIES[lan].company3.address,
      phone: COMPANIES[lan].company3.phone,
      cover: "assets/company2-cover2.jpg",
      google: "https://maps.app.goo.gl/kcnVHEa6WFFgPvr49?g_st=iw",
      instagram: "https://www.instagram.com/dasholz.ly/?hl=en",
      facebook: "https://www.facebook.com/p/DasHolzly-100076321297712/",
    },
    {
      name: COMPANIES[lan].company2.name,
      image: COMPANIES[lan].company2.image,
      time: COMPANIES[lan].company2.time,
      address: COMPANIES[lan].company2.address,
      phone: COMPANIES[lan].company2.phone,
      cover: "assets/company1-cover1.jpg",
      google: "https://maps.app.goo.gl/XFE5zoJcg8Rz3rJK7?g_st=iw",
      tiktok:
        "https://www.tiktok.com/@abdalhmedbahbah/video/7127757850817858822?lang=bn-IN",
      facebook: "https://www.facebook.com/abdesignboutique/",
    },
    {
      name: COMPANIES[lan].company4.name,
      time: COMPANIES[lan].company4.time,
      address: COMPANIES[lan].company4.address,
      image: COMPANIES[lan].company4.image,
      phone: COMPANIES[lan].company4.phone,
      cover: "assets/company3-cover3.jpg",
      instagram: "https://www.instagram.com/zan_for_furniture/?hl=en",
      google: "https://maps.app.goo.gl/xBGcuY11AY4gTps8A?g_st=iw",
      facebook: "https://www.facebook.com/officialzan/",
    },
  ];
  return {
    works,
    companies,
  };
}
export const HOME = {
  en: {
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
  ar: {
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
};
export const ABOUT = {
  en: {
    title: "About US",
    trainingTitle: "Department of Training Courses",
    trainingInfo:
      "The Training Courses Department was established in 2019, and over the past four years, more than1,000 trainees have been trained in Libya (Tripoli, Misurata, Benghazi and other areas) to support those who are willing to specialize in interior design by providing the maximum benefit possible through the establishment of integrated training courses specialized in internal design prepared byTrainer / Abdulhamid Al-Bahbah, who obtained a professional TOT certificate from the CanadianInstitute of Dr. Al-Fagih, to train them theoretically and practically in accordance with the need sof the local and international market and develop the skills of project planning, customer communication and implementation to project delivery.In order to strengthen the culture of the importance of this specialization and to extend to the public benefit, designer / Abdulhamid Al-Bahbah held awareness seminars and participated in the most important conferences dealing with this field in various countries of the world.He was also honored to represent Libya in the Interior Design Category by (ICE) organization via the Italian Embassy at the World Architecture Networking Event, and to represent the State ofLibya in important forums in other countries.",
    company: "AB GROUP",
    titleI: "Who Is ABD ALHAMED ALBAHBAH",
    info: "AB Group is an international company founded in 2018 in Tripoli – Libya by the interior designer: Abdulhamid Albahbah. As a result of the increase in the demand for technical expertise and skills enhanced by the spirit of innovation and modernism, AB Group was seeking to be proactive in providing such expertise. The company set a strategic arrangement to develop its work by establishing a strong entity consisting of several sections for different specializations, and several spectacular experts and specialists in this field. As a result, the company has been able to spread out over the past four years to provide its diversified services through several sections: interior design, architecture, real estate investment, advertising training, and content creation. By implementing many projects around the world in Libya, Dubai, Egypt, Turkey, and Tunisia. This highlighted AB Group as a global company with a unique vision that aims to enhance the sophistication of public taste.",
    infoI:
      "Abdulhamid Albahbah, born in 1993 in Derna - Libya, is an interior designer, founder, and General Director of AB Group. He obtained many academic certificates in several fields, the most important of which are interior design, architecture, and human development certificates from the United Nations Institute. Project management and marketing from the Canadian Institute of Dr. Ibrahim Alfaqeeh. He obtained an MBA Business Administration Diploma from the American Institute. Obtained many Certificates of Appreciation in the field of interior design and architecture. Participated in many local and international exhibitions in several different countries such as Italy, Netherlands, and Turkey.",
    titleII: "His main objective",
    infoII:
      "promote the interior design and architecture industry and to raise public taste. His goals emerge from his understanding of the importance of the field of interior design and architecture, and to shed more light on it in the Middle East by spreading this culture to enable those interested in these fields to upgrade themselves and gain trust to reach their ambitions.To prove that the countries of the Middle East have talents and sparkling minds capable of succeeding and excelling globally.AB Group's vision is to spread this culture by helping students and trainees through training courses and workshops.",
    titleIII: "Content Maker",
    infoIII:
      "Through the work of designer / Abdulhamid Al-Bahbah and his interest in presenting and explaining his works and ideas on social media, he has become one of the most important content makers worldwide. He recently won an honoring award from the Arab Content Makers Forum in2022. His method was characterized by the preparation of videos in which he introduces and explains targeted and innovative ideas in his field that can be implemented simply, in addition to shedding light on the flaws that must be avoided and giving appropriate solutions.",
  },
  ar: {
    title: "من نكون",
    company: " AB مجموعة",
    trainingTitle: "قسم الدورات التدريبية",
    trainingInfo:
      "تأسس قسم الدورات التدريبية عام 2019، وعلى مدى السنوات الأربع الماضية، تم تدريب أكثر من 1000 متدرب في ليبيا (طرابلس ومصراتة وبنغازي ومناطق أخرى) لدعم الراغبين في التخصص في التصميم الداخلي من خلال توفير تحقيق أقصى استفادة ممكنة من خلال إقامة دورات تدريبية متكاملة متخصصة في التصميم الداخلي من إعداد المدرب / عبدالحميد البحبح الحاصل على شهادة TOT احترافية من معهد الدكتور الفقيه الكندي لتدريبهم نظرياً وعملياً بما يتوافق مع حاجة البرنامج السوق المحلي والعالمي وتنمية مهارات تخطيط المشاريع والتواصل مع العملاء والتنفيذ وصولاً إلى تسليم المشاريع.ولتعزيز ثقافة أهمية هذا التخصص وتحقيق المنفعة العامة أقام المصمم / عبدالحميد البحباح ندوات توعوية وشارك في أهم المؤتمرات التي تتناول هذا المجال في مختلف دول العالم. كما تشرف بتمثيل ليبيا في فئة التصميم الداخلي من قبل منظمة (ICE) عبر السفارة الإيطالية في حدث التواصل المعماري العالمي، وتمثيل دولة ليبيا في المحافل الهامة في الدول الأخرى.",
    titleI: "من هو عبد الحميد بحباح",
    info: "AB Group هي شركة عالمية تأسست عام 2018 في طرابلس – ليبيا على يد المصمم الداخلي: عبد الحميد البحباح. ونتيجة لزيادة الطلب على الخبرة الفنية والمهارات المعززة بروح الابتكار والحداثة، كانت مجموعة AB تسعى إلى أن تكون سباقة في تقديم مثل هذه الخبرة. وضعت الشركة ترتيباً استراتيجياً لتطوير عملها من خلال إنشاء كيان قوي يتكون من عدة أقسام لتخصصات مختلفة، والعديد من الخبراء والمتخصصين المتميزين في هذا المجال. ونتيجة لذلك، تمكنت الشركة من الانتشار خلال السنوات الأربع الماضية لتقديم خدماتها المتنوعة من خلال عدة أقسام: التصميم الداخلي، الهندسة المعمارية، الاستثمار العقاري، التدريب الإعلاني، وإنشاء المحتوى. من خلال تنفيذ العديد من المشاريع حول العالم في ليبيا، دبي، مصر، تركيا، وتونس. وقد سلط هذا الضوء على مجموعة AB كشركة عالمية ذات رؤية فريدة تهدف إلى تعزيز تطوير الذوق العام.",
    infoI:
      "عبد الحميد البباحة من مواليد 1993 بمدينة درنة - ليبيا، مصمم ديكور داخلي، المؤسس والمدير العام لمجموعة AB. حصل على العديد من الشهادات الأكاديمية في عدة مجالات أهمها وهي شهادات التصميم الداخلي والهندسة المعمارية والتنمية البشرية من معهد الأمم المتحدة. إدارة وتسويق المشاريع من المعهد الكندي للدكتور ابراهيم الفقيه. حصل على دبلومة إدارة الأعمال MBA من المعهد الأمريكي. حصل على العديد من شهادات التقدير في مجال التصميم الداخلي و بنيان. شارك في العديد من المعارض المحلية والدولية في عدة معارض مختلفة دول مثل إيطاليا وهولندا وتركيا.",
    titleIII: "صانع محتوى",
    infoIII:
      "من خلال أعمال المصمم عبدالحميد البحبح واهتمامه بعرض أعماله وشرحها والأفكارعلى وسائل التواصل الاجتماعي، أصبح واحدا من أهم صانعي المحتوى على مستوى العالم. هو مؤخرا حصل على جائزة تكريمية من صناع المحتوى العرب المنتدى في 2022.   يقوم بإعداد فيديوهات حيث يتم  فيها التعريف والشرح للأفكار المستهدفة والمبتكرة في مجاله التي يمكن أن يمكن تنفيذها ببساطة، بالإضافة إلى تسليط الضوء على العيوب التي يجب تجنبها وإعطاء الحلول المناسبة وهي شهادات التصميم الداخلي والهندسة المعمارية والتنمية البشرية من معهد الأمم المتحدة. إدارة وتسويق المشاريع من المعهد الكندي للدكتور ابراهيم الفقيه. حصل على دبلومة إدارة الأعمال MBA من المعهد الأمريكي. حصل على العديد من شهادات التقدير في مجال التصميم الداخلي و بنيان.شارك في العديد من المعارض المحلية والدولية في عدة معارض مختلفة دول مثل إيطاليا وهولندا وتركيا.",
    titleII: "هدفه الرئيسي",
    infoII:
      "تعزيز التصميم الداخلي وصناعة الهندسة المعمارية ولرفع الذوق العام . أهدافه تنبع من فهمه لل أهمية مجال التصميم الداخلي والهندسة المعمارية، و تسليط الضوء عليها في الشرق الأوسط من خلال نشرهذه الثقافة لتمكين المهتمين في هذه المجالات للارتقاء بأنفسهم وكسب الثقة للوصول إلى طموحاتهم. أن نثبت أن دول الشرق الأوسط تتمتع بالمواهب والعقول اللامعة قادرة على النجاح والتفوق عالميا. وتتمثل رؤية مجموعة AB في نشر هذه الثقافة من خلال مساعدة الطلاب والمتدربين من خلال الدورات التدريبية وورش العمل",
  },
};
export const WORKS = {
  en: {
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
    nav: [
      "all",
      "interior design",
      "Architectural design",
      "Design and implementation",
    ],
  },
  ar: {
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
    nav: ["الكل", "تصميم داخلي", "تصميم معماري", "تصميم وتنفيذ"],
  },
};
export const CONTACT = {
  en: {
    title: "contact us",
  },
  ar: {
    title: "تواصل معنا",
  },
};
export const COMPANIES = {
  en: {
    title: "companies",
    company1: {
      name: "AB Group",
      time: "10:00 am - 5:00 pm",
      address:
        "Tripoli - New Zanata - opposite Kudo Restaurant - Al-Suljan Building - 4th floor",
      image: "assets/logo2.png",
      phone: "0918244414",
    },
    company2: {
      name: "AB disign boutique",
      time: "10:00 am - 5:00 pm",
      address:
        "Tripoli - New Zanata - opposite Kudo Restaurant - Al-Suljan Building - 4th floor",
      image: "assets/2.png",
      phone: "0918244414",
    },
    company3: {
      name: "das holz kitchens",
      time: "10:00 am - 9:00 pm, except Friday",
      address: "Tripoli - Zenata Road",
      image: "assets/1.png",
      phone: "0915170505 - 0918170505",
    },
    company4: {
      name: "ZAN furniture and decoration",
      address: "Znatah tripoli - libya",
      time: "10:00 am - 7:00 pm, except Friday",
      image: "assets/3.png",
      phone: "0910204141 - 0910604141",
    },
  },
  ar: {
    title: "الشركات",
    company1: {
      name: "مجموعة AB",
      time: "10:00 am - 5:00 pm",
      address: "ليبيا - طرابلس - زناتة",
      image: "assets/logo2.png",
      phone: "0918244414",
    },
    company2: {
      name: "AB disign boutique",
      time: "10:00 am - 5:00 pm",
      address:
        " طرابلس - زناته الجديده - مقابل مطعم كودو - بنايه الصولجان - الطابق 4",
      image: "assets/2.png",
      phone: "0918244414",
    },
    company3: {
      name: "مطابخ داز هولز",
      time: " 10 am – 9:00 pm / ما عدا يوم الجمعة",
      address: "طرابلس - طريق زناتة",
      image: "assets/1.png",
      phone: "0915170505 - 0918170505",
    },
    company4: {
      name: "شركة زان للمطابخ والأثاث وأعمال الديكور",
      time: " 10 am – 7:00 pm / ما عدا يوم الجمعة",
      image: "assets/3.png",
      phone: "0910204141 - 0910604141",
      address: "تاجوراء - ليبيا - 300 متر من الاشاره الضوئيه",
    },
  },
};
export const FOOTER = {
  en: {
    time: "10:00 am - 5:00 pm",
    InteriorDesignDepartment: "Interior design department: 0915904414",
    DepartmentOfArchitecturalMapsDesign: "Architectural Department: 0915944414",
    address: "address: Znatah - Tripoli - Libya",
  },

  ar: {
    time: "10:00 am - 5:00 pm",
    InteriorDesignDepartment: "قسم تصميم الداخلي: 0915904414",
    DepartmentOfArchitecturalMapsDesign: "التصميم المعماري: 0915944414",
    address: "العنوان: زناتة - طرابلس - ليبيا",
  },
};

export const social = [
  {
    icon: SiGooglemaps,
    color: "#EA4335",
    to: "https://maps.app.goo.gl/nxnJoDriUKMpY6HQ7?g_st=iw",
  },
  {
    icon: SiFacebook,
    color: "#0165E1",
    to: "https://www.facebook.com/abdalhmedbahbah?mibextid=LQQJ4d",
  },
  {
    icon: SiInstagram,
    color: "#F77737",
    to: "https://instagram.com/abdalhmedbahbah1?igshid=YTQwZjQ0NmI0OA==",
  },
  {
    icon: SiTiktok,
    color: "#ff0050",
    to: "https://www.tiktok.com/@abdalhmedbahbah?_t=8i4jMdjvQEI&_r=1",
  },
];

export const ABDALHAMED = {
  en: [
    {
      title: "Who Is ABD ALHAMED ALBAHBAH",
      info: "Abdulhamid Albahbah, born in 1993 in Derna - Libya, is an interior designer, founder, and General Director of AB Group. He obtained many academic certificates in several fields, the most important of which are interior design, architecture, and human development certificates from the United Nations Institute. Project management and marketing from the Canadian Institute of Dr. Ibrahim Alfaqeeh. He obtained an MBA Business Administration Diploma from the American Institute. Obtained many Certificates of Appreciation in the field of interior design and architecture. Participated in many local and international exhibitions in several different countries such as Italy, Netherlands, and Turkey.",
    },
    {
      title: "His main objective",
      info: "promote the interior design and architecture industry and to raise public taste. His goals emerge from his understanding of the importance of the field of interior design and architecture, and to shed more light on it in the Middle East by spreading this culture to enable those interested in these fields to upgrade themselves and gain trust to reach their ambitions.To prove that the countries of the Middle East have talents and sparkling minds capable of succeeding and excelling globally.AB Group's vision is to spread this culture by helping students and trainees through training courses and workshops.",
    },
    {
      title: "Content Maker",
      info: "Through the work of designer / Abdulhamid Al-Bahbah and his interest in presenting and explaining his works and ideas on social media, he has become one of the most important content makers worldwide. He recently won an honoring award from the Arab Content Makers Forum in2022. His method was characterized by the preparation of videos in which he introduces and explains targeted and innovative ideas in his field that can be implemented simply, in addition to shedding light on the flaws that must be avoided and giving appropriate solutions.",
    },
  ],
  ar: [
    {
      title: "من هو عبد الحميد بحباح",
      info: "عبد الحميد البباحة من مواليد 1993 بمدينة درنة - ليبيا، مصمم ديكور داخلي، المؤسس والمدير العام لمجموعة AB. حصل على العديد من الشهادات الأكاديمية في عدة مجالات أهمها وهي شهادات التصميم الداخلي والهندسة المعمارية والتنمية البشرية من معهد الأمم المتحدة. إدارة وتسويق المشاريع من المعهد الكندي للدكتور ابراهيم الفقيه. حصل على دبلومة إدارة الأعمال MBA من المعهد الأمريكي. حصل على العديد من شهادات التقدير في مجال التصميم الداخلي و بنيان. شارك في العديد من المعارض المحلية والدولية في عدة معارض مختلفة دول مثل إيطاليا وهولندا وتركيا.",
    },
    {
      title: "صانع محتوى",
      info: "من خلال أعمال المصمم عبدالحميد البحبح واهتمامه بعرض أعماله وشرحها والأفكارعلى وسائل التواصل الاجتماعي، أصبح واحدا من أهم صانعي المحتوى على مستوى العالم. هو مؤخرا حصل على جائزة تكريمية من صناع المحتوى العرب المنتدى في 2022.   يقوم بإعداد فيديوهات حيث يتم  فيها التعريف والشرح للأفكار المستهدفة والمبتكرة في مجاله التي يمكن أن يمكن تنفيذها ببساطة، بالإضافة إلى تسليط الضوء على العيوب التي يجب تجنبها وإعطاء الحلول المناسبة وهي شهادات التصميم الداخلي والهندسة المعمارية والتنمية البشرية من معهد الأمم المتحدة. إدارة وتسويق المشاريع من المعهد الكندي للدكتور ابراهيم الفقيه. حصل على دبلومة إدارة الأعمال MBA من المعهد الأمريكي. حصل على العديد من شهادات التقدير في مجال التصميم الداخلي و بنيان.شارك في العديد من المعارض المحلية والدولية في عدة معارض مختلفة دول مثل إيطاليا وهولندا وتركيا.",
    },
    {
      title: "هدفه الرئيسي",
      info: "تعزيز التصميم الداخلي وصناعة الهندسة المعمارية ولرفع الذوق العام . أهدافه تنبع من فهمه لل أهمية مجال التصميم الداخلي والهندسة المعمارية، و تسليط الضوء عليها في الشرق الأوسط من خلال نشرهذه الثقافة لتمكين المهتمين في هذه المجالات للارتقاء بأنفسهم وكسب الثقة للوصول إلى طموحاتهم. أن نثبت أن دول الشرق الأوسط تتمتع بالمواهب والعقول اللامعة قادرة على النجاح والتفوق عالميا. وتتمثل رؤية مجموعة AB في نشر هذه الثقافة من خلال مساعدة الطلاب والمتدربين من خلال الدورات التدريبية وورش العمل",
    },
  ],
};
