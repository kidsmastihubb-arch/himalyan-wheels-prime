import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { waLink } from "@/lib/site";
import { Reveal } from "./Reveal";

interface ContactFormProps {
  defaultMessage?: string;
  interestOptions?: string[];
}

const defaultInterests = [
  "Buying a Car",
  "Selling My Car",
  "Car Exchange",
  "Finance",
  "General Enquiry",
];

export function ContactForm({
  defaultMessage = "Hi Himalyan Wheels, I would like to make an enquiry.",
  interestOptions = defaultInterests,
}: ContactFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState(interestOptions[0]);
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const text = `Hi Himalyan Wheels,\n\nName: ${name}\nPhone: ${phone}\nInterested in: ${interest}\n\n${message || defaultMessage}`;
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  }

  return (
    <Reveal>
      <form
        onSubmit={handleSubmit}
        className="glass-panel space-y-5 rounded-2xl p-7 sm:p-8"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="cf-name" className="mb-2 block text-sm font-medium">
              Name
            </label>
            <input
              id="cf-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="h-11 w-full rounded-lg border border-input bg-transparent px-4 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-1 focus-visible:outline-primary"
            />
          </div>
          <div>
            <label htmlFor="cf-phone" className="mb-2 block text-sm font-medium">
              Phone
            </label>
            <input
              id="cf-phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 ..."
              className="h-11 w-full rounded-lg border border-input bg-transparent px-4 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-1 focus-visible:outline-primary"
            />
          </div>
        </div>

        <div>
          <label htmlFor="cf-interest" className="mb-2 block text-sm font-medium">
            I'm interested in
          </label>
          <select
            id="cf-interest"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            className="h-11 w-full rounded-lg border border-input bg-transparent px-3 text-sm shadow-sm transition-colors focus-visible:outline-1 focus-visible:outline-primary"
          >
            {interestOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-background text-foreground">
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="cf-message" className="mb-2 block text-sm font-medium">
            Message
          </label>
          <textarea
            id="cf-message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us what you're looking for..."
            className="w-full rounded-lg border border-input bg-transparent px-4 py-3 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-1 focus-visible:outline-primary"
          />
        </div>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
        >
          <Send className="size-4" aria-hidden />
          Send Enquiry
        </button>
      </form>
    </Reveal>
  );
}
