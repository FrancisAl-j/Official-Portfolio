import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import Resume from "../assets/FrancisAlj-Resume.pdf";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    from: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [copy, setCopy] = useState(false);
  const [download, setDownload] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const url = "https://portfolio-server-aqzj.onrender.com";

  const handleEmailSend = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, from, message } = formData;

    try {
      setIsLoading(true);

      const res = await fetch(`${url}/api/email/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, from, message }),
      });

      if (res.ok) {
        setIsLoading(false);
        setFormData({
          name: "",
          from: "",
          message: "",
        });
        setError(null);
        setSuccess(true);
      } else {
        const data = await res.json();
        setError(data.message || "An error occurred");
        setIsLoading(false);
      }
    } catch (error) {
      setError("An error occurred");
      setIsLoading(false);
    }
  };

  const handleCopyGmail = async () => {
    try {
      await window.navigator.clipboard.writeText("kikobilas123@gmail.com");
      setCopy(true);
    } catch (error) {
      console.error("Unable to copy to clipboard.", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCopy(false);
      setDownload(false);
      setSuccess(false);
    }, 3000);

    return () => clearInterval(interval);
  }, [copy, download, success]);

  return (
    <main className="h-auto grid place-items-center my-10" id="contact">
      <section className="main-container h-full flex flex-col-reverse lg:flex-row gap-5">
        <div className="w-full grid place-items-center">
          <form
            onSubmit={handleEmailSend}
            className="glass form flex flex-col px-3 gap-5 rounded-xl py-7"
          >
            <header>
              <h1 className="text-white text-3xl font-bold text-center">
                Contact Me
              </h1>
            </header>

            <div className="flex flex-col">
              <span className="text-white">Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border-white border-[1px] bg-purple-300 rounded-lg p-1 px-1"
              />
            </div>

            <div className="flex flex-col">
              <span className="text-white">Email</span>
              <input
                type="email"
                name="from"
                value={formData.from}
                onChange={handleChange}
                className="border-white border-[1px] bg-purple-300 rounded-lg p-1 px-1"
              />
            </div>

            <div className="flex flex-col">
              <span className="text-white">Message</span>
              <textarea
                rows={6}
                name="message"
                id=""
                value={formData.message}
                onChange={handleChange}
                className="border-white border-[1px] bg-purple-300 rounded-lg p-1 px-1"
              ></textarea>
            </div>

            <button className="bg-purple-800 border-white border-[1px] p-1 rounded-lg text-white cursor-pointer">
              {isLoading
                ? "Sending email..."
                : success
                ? "Email Sent"
                : "Send Email"}
            </button>
            {error && <p className="text-red-600">{error}</p>}
          </form>
        </div>

        <div className="w-full grid place-items-center">
          <div className="form lg:w-[400px]">
            <div className="flex flex-col gap-4 items-start">
              <a href={Resume} download="FrancisAlj_Resume" target="_blank">
                <button
                  className="glass text-white text-xl lg:text-3xl py-2 px-5 rounded-full cursor-pointer"
                  onClick={() => setDownload(true)}
                >
                  {download ? "Resume Downloaded" : "Download Resume"}
                </button>
              </a>

              <button
                onClick={handleCopyGmail}
                className="glass text-white text-xl lg:text-3xl py-2 px-5 rounded-full cursor-pointer"
              >
                {copy ? `Copied to Clipboard` : `kikobilas123@gmail.com`}
              </button>
            </div>

            <div className="my-7">
              <h1 className="text-white text-2xl lg:text-4xl">
                Connect with me.
              </h1>
              <div className="my-5 flex gap-2">
                <a href="https://www.facebook.com/Bilaso2" target="_blank">
                  <span className="bg-blue-900/70 backdrop-blur-md border-[1px] border-white text-white p-2">
                    Facebook
                  </span>
                </a>

                <a href="https://github.com/FrancisAl-j" target="_blank">
                  <span className="bg-black/70 backdrop-blur-md border-[1px] border-white text-white p-2">
                    Github
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/francis-al-j-bilas-104547355/"
                  target="_blank"
                >
                  <span className="bg-blue-500/90 backdrop-blur-md border-[1px] border-white text-black p-2">
                    LinkedIn
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
