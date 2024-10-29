import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const AppointmentForm = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${baseUrl}/voice-agent/calls/athena`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            phone: phone,
          }),
        }
      );

      if (response.ok) {
        toast.success("Our agent will contact you soon");
      } else {
        const errorData = await response.json();
        toast.error(`Failed to send appointment request: ${errorData.message}`);
      }
    } catch (error) {
      toast.error(`Error occurred: ${error.message}`);
    } finally {
      setIsSubmitting(false);
      setEmail("");
      setPhone("");
      e.target.reset();
    }
  };

  return (
    <div id="appointment" className="py-24 text-center">
      <div className="container mx-auto px-4 sm:px-8 xl:px-4">
        <div className="card mx-auto max-w-3xl p-8 bg-custom-50 border border-gray-200 shadow-md rounded-lg">
          <div className="card-body">
            <h5 className="text-2xl font-bold mb-4 text-center">
              Book Your Appointment
            </h5>
            <p className="mb-8 text-center">
              Please fill out the form to book an appointment with Athena. Our AI voice agent will make an outbound call to confirm the details soon.
            </p>
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 text-left mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  id="phone"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-left mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  id="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn-solid-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Book Appointment"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
