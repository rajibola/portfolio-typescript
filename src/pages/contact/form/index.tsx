import email from "@emailjs/browser";
import { ReactComponent as Arrow } from "assets/arrow-top.svg";
import { useRef, useState } from "react";

export const Form = () => {
  const [count, setCount] = useState(0);
  const form = useRef<HTMLFormElement | any>();

  const sendEmail = (e: any) => {
    e.preventDefault();

    console.log(form.current);

    email
      .sendForm("gmail", "email_template", form.current, "wyhVUNNe41wySni2A")
      .then(
        (result) => {
          console.log(result.text);
          alert("SENT");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="text-white w-screen pb-[120px] pt-20">
      <div className="max-w-[850px] w-full mx-auto font-graphik">
        <div className="text-[72px] leading-[90px] font-extralight my-[0.5em]">
          <div className="h-[94px] overflow-hidden">
            <h1>Get in touch</h1>
          </div>
        </div>
        <div className="text-16 leading-8 max-w-[600px] mb-8">
          <div className="overflow-hidden">
            <h1>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
              nesciunt eligendi cumque temporibus dolore qui odit sint delectus
              quos vitae.
            </h1>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            className="w-full bg-transparent border-b border-b-white p-4 outline-none text-14"
            placeholder="Name"
            type="text"
            name="name"
            autoComplete="name"
            required
          />
          <input
            className="w-full bg-transparent border-b border-b-white p-4 outline-none text-14"
            placeholder="E-mail"
            type="email"
            name="email"
            required
            autoComplete="email"
          />
          <input
            className="w-full bg-transparent border-b border-b-white p-4 outline-none text-14"
            placeholder="Subject"
            type="text"
            name="subject"
            required
          />
          <div className="relative">
            <textarea
              className="w-full bg-transparent border-b border-b-white p-4 min-h-[100px] outline-none text-14"
              placeholder="Message"
              onChange={(e) => setCount(e.target.value.length)}
              maxLength={1000}
              name="message"
              required
            />

            <div className="absolute right-3 text-9 italic opacity-50 bottom-3">
              {count} / 1000
            </div>
          </div>
          <div className="group inline-flex items-center mt-2 transition-all">
            <input
              type="submit"
              value="Send Email"
              className="text-white/50 hover:text-white text-14"
            />
            <div className="w-11 h-11 group-hover:border-[1.5px] group-hover:ml-2 flex justify-center items-center rounded-full transition-all">
              <Arrow className="h-10 w-5 fill-white rotate-90 " />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
