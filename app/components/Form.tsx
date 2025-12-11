"use client";

export default function Form() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = {
      firstName: form.firstname.value,
      lastName: form.lastname.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      alert("Message sent successfully!");
      form.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  };
  return (
    <div className="bg-white    md:col-span-2  text-justify text-gray-700">
      <div className="max-w-3xl mx-auto  bg-white  ">
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6 font-montserrat"
          onSubmit={handleSubmit}
        >
          {/* First Name */}
          <div className="flex flex-col">
            <label className="font-medium mb-2 text-sm">
              First Name <span className="text-black-500">*</span>
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#C67A2B]"
              required
              name="firstname"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label className="font-medium mb-2 text-sm">
              Last Name <span className="text-black-500">*</span>
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#C67A2B]"
              required
              name="lastname"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col ">
            <label className="font-medium mb-2 text-sm">
              Email Address <span className="text-black-500">*</span>
            </label>
            <input
              type="email"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#C67A2B]"
              required
              name="email"
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col ">
            <label className="font-medium mb-2 text-sm">
              Subject <span className="text-black-500">*</span>
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#C67A2B]"
              required
              name="subject"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col md:col-span-2">
            <label className="font-medium mb-2 text-sm">
              Message <span className="text-black-500">*</span>
            </label>
            <textarea
              rows={5}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#C67A2B]"
              required
              name="message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="bg-[#C67A2B] text-white w-full py-2 rounded-md text-lg tracking-wide hover:bg-[#a86422] transition cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
