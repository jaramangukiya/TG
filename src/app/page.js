import Image from "next/image";

export default function Home() {
  return (
   <div>
  <header className="py-4 px-2 md:px-0 fixed w-full bg-black/30  backdrop-blur">
    <div className="container">
      <div className="flex justify-between items-center ">
        <a href="#">
          <Image width={50} height={50} src="/images/logo.png" alt="" />
        </a>
        <ul className="text-white flex-col md:flex-row flex md:gap-8 items-center">
          <li>
            <a>About me</a>
          </li>
          <li>
            <a>Skills</a>
          </li>
          <li>
            <a>Contact me</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
  <section className="px-5 bg- raleway pt-[80px] pb-5 md:pt-0 md:pb-0">
    <div className="container">
      <div className="grid  grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="text-[#1e1e1e] ">
          <h3 className="pb-5  font-medium">Hi, I am</h3>
          <h1 className=" text-5xl font-bold">Gautam Tagadiya</h1>
          <p className="pt-3 font-semibold">Laboratory Technician</p>
        </div>
        <div className="order-first md:order-last">
          <Image width={800} height={500} src="/images/banner.jpeg" alt="" />
        </div>
      </div>
    </div>
  </section>
  <section className="px-5 bg-gradient-to-tr text-white from-[#1D1D1D] to-[#000000] py-16">
    <div className="container">
      <p className="w-full md:w-6/12">Highly motivated and detail-oriented Laboratory Technician with a strong foundation in medical laboratory technology. Eager to apply theoretical knowledge and skills in a clinical laboratory setting.</p>
    </div>
  </section>
  <section className="px-5 py-10 md:py-16">
    <div className="container">
      <h2 className="text-center text-5xl font-bold text-[#1e1e1e] raleway mb-4"><span className="relative after:absolute  after:left-0 after:bottom-0 after:h-[2px] after:w-[40%] after:bg-[#1e1e1e]">About Me</span></h2>
      <p className="font-medium text-center md:w-7/12 mx-auto pt-2">Analytical and conscientious lab technician open to opportunities to apply knowledge regarding the best methods for producing accurate and valuable test results. </p>
    </div>
  </section>
  <section className="px-5 ">
    <div className="container">
      <Image width={150} height={150} className="mx-auto" src="/images/separatorBlack.png" alt="" />
      <div className="py-24 grid md:grid-cols-2 gap-4 md:w-8/12 mx-auto">
        <div className>
          <h2 className="font-semibold text-3xl mb-4">Accurate Pathology Laboratory - Surat </h2>
          <h3 className="font-medium">Collection Boy <span className="font-normal">- 2018-20</span></h3>                    
        </div>
        <div>
          <h2 className="font-semibold text-3xl mb-4">Chaitanya Pathology Laboratory - Surat </h2>
          <h3 className="font-medium">Owner &amp; Lab Technician (Administrator) <span className="font-normal">Dec-2020/Sep-2023</span></h3>                    
        </div>
      </div>
      <Image width={150} height={150} className="mx-auto" src="/images/separatorBlack.png" alt="" />
    </div>
  </section>
  <section className="px-5 py-10 md:py-16">
    <div className="container">
      <h2 className="text-center text-5xl font-bold text-[#1e1e1e] raleway mb-4"><span className="relative after:absolute  after:left-0 after:bottom-0 after:h-[2px] after:w-[40%] after:bg-[#1e1e1e]">Skills</span></h2>
      <div className="grid  md:grid-cols-4 gap-4 md:gap-10 text-center  md:text-2xl pt-10 md:mt-16 ">
        <div>Good analycal and planning skills.</div>
        <div>Good Accuracy and aenon to details.</div>
        <div>Excellent problem analysis. </div>
        <div>Excellent judgement according to the situaon.</div>
      </div>
    </div>
  </section>
  <section className="px-5 py-10 md:py-16">
    <div className="container">
      <h2 className="text-center text-5xl font-bold text-[#1e1e1e] raleway mb-4"><span className="relative after:absolute  after:left-0 after:bottom-0 after:h-[2px] after:w-[40%] after:bg-[#1e1e1e]">Contact</span></h2>
      <ul className="flex flex-col items-center md:items-end gap-3">
        <li className="gap-3 flex items-center">
          <span className="font-semibold">Call:</span>
          <a href="tel:7433093820">7433093820</a>
        </li>
        <li className="gap-3 flex items-center">
          <span className="font-semibold">Email:</span>
          <a href="mailto:gautamtagadiya0303@gmail.com">gautamtagadiya0303@gmail.com</a>
        </li>
        <li className="gap-3 flex items-center">
          <span className="font-semibold">Address:</span>
          <span>343, Millanium Bunglow, Near. Madhuvan public school, Rangoli Chowk, Velanja</span>
        </li>
      </ul>
    </div>
  </section>
</div>

  );
}
