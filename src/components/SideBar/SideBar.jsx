import { useDispatch } from "react-redux";
import { setSelectedGenre } from "../../redux/reducers/selectedGenresSlice";
import nourData from "../../data/nour-alyakine.json";
import fiqhData from "../../data/fiqh.json";
import dorarData from "../../data/dorarData.json";
import bjomaaData from "../../data/bjomaaData.json";
import React, { useState } from "react";
import FiqhDetailsModal from "../MovieModal/FiqhDetailsModal.jsx";
import Scene from "../../Visitors/Scene";
import motounData from "../../data/motoun.json";

export default function SideBar() {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(null);

  const categories = [
    {
      id: "dorar",
      title: " درر الدكتور فاضل السامرائ",
      videos: fiqhData,
      details: `
وصف الباب :  يُعنى هذا الباب بفقه العبادات على المذهب المالكي، مستندًا إلى الأدلة من الكتاب والسنة، مع التركيز على المسائل المعاصرة في فقه العبادات التي يواجهها كثير من الناس. ويهدف إلى بناء فهم منهجي راسخ لمسائله وأحكامه، من خلال دراسة أدلة متن ابن عاشر دراسةً تأصيلية تحليلية، تجمع بين النص الفقهي المختصر وأصوله من الكتاب والسنة، وقواعد المذهب، مع تنزيلها على قضايا معاصرة تمسّ واقع الناس ومعاملاتهم اليومية.

وينطلق هذا المسار العلمي من اعتماد متن ابن عاشر باعتباره مدخلًا تعليميًا محكمًا وسهل العبارة، مع ربط مسائله برسالة ابن أبي زيد القيرواني بوصفها أصلًا تأصيليًا معتمدًا في فقه المعاملات، يُبرز المقاصد العامة للأحكام والضوابط الكلية، ويكشف عن عمق البناء الفقهي المالكي في باب المعاش والمال.

ويقدّم هذا الباب كتبًا مختارة تُدرّس مسائل المعاملات بابًا بابًا، مع بيان المعتمد من الأقوال وذكر الخلاف المعتبر عند الحاجة، وتعليل الأحكام وربطها بالقواعد الفقهية والمقاصدية. وقد قُدِّمت هذه المواد في صيغ رقمية (PDF) منظّمة، لتسهيل القراءة والمراجعة وبناء المعرفة العلمية بشكل متدرّج.

كما يُدعّم هذا المحتوى بسلسلة دروس تطبيقية يشرف عليها مشايخ أكفاء من تونس والجزائر من علماء الفقه المالكي، جمعوا بين الرسوخ في المذهب، والإلمام بالنوازل المالية المعاصرة، وحسن تنزيل الأحكام على واقع المعاملات الحديثة، كالمعاملات البنكية، والعقود المستجدّة، والشركات، والديون، والمعاملات الرقمية.

ولا يقتصر هذا الباب على الجانب النظري، بل يهدف إلى تكوين ملكة فقهية عملية لدى الطالب، تمكّنه من فهم الحكم وأصله، واستيعاب علّته ومقصده، وإدراك ضوابط تنزيله على الوقائع الجديدة، وفق منهج المالكية القائم على تحقيق المناط، ومراعاة العرف، وسدّ الذرائع، وتحقيق العدل، ورفع الحرج.

وبذلك يسعى هذا الباب إلى ردم الفجوة بين المتن الفقهي والواقع المعاش، وتكوين طالب علم واعٍ بتراثه، بصير بزمنه، وقادر على التعامل مع قضايا المعاملات بروح فقهية راسخة ومنهج علمي منضبط.

`,
    },
  ];

  const handleClick = (cat) => {
    dispatch(
      setSelectedGenre({
        id: cat.id,
        title: cat.title,
      }),
    );
  };

  return (
    <div
      className="bg-neutral-800 text-neutral-100 p-2 pr-0 drop-shadow-lg"
      style={{
        backgroundImage:
          'url("https://st2.depositphotos.com/8843414/12482/v/450/depositphotos_124824108-stock-illustration-abstract-hexagon-molecular-structure-pattern.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {categories.map((cat) => (
        <div key={cat.id} className="text-center mb-3">
          <div
            className="flex items-center justify-center gap-3"
            style={{ direction: "rtl" }}
          >
            <div
              onClick={() => handleClick(cat)}
              className="cursor-pointer hover:bg-cyan-600 font-bold px-2"
              style={{
                fontFamily: "'Arabic Typesetting', serif",
                fontSize: "38px",
                color: "yellow",
                whiteSpace: "nowrap",
              }}
            >
              {cat.title}
            </div>

            {cat.details && (
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenModal(cat);
                }}
                className="cursor-pointer"
              >
                <Scene
                  text="اضغط للمزيد"
                  as="span"
                  style={{
                    fontSize: "28px",
                    fontFamily: "'Arabic Typesetting', serif",
                    glowColor: "#00ffe7",
                  }}
                  className="underline"
                />
              </span>
            )}
          </div>
        </div>
      ))}

      {openModal && (
        <FiqhDetailsModal data={openModal} onClose={() => setOpenModal(null)} />
      )}
    </div>
  );
}
