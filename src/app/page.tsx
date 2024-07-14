import Header from "@/components/Homepage/Header";
import Section from "@/components/Homepage/Section";
import Feature from "@/components/Homepage/Feature";

export default async function Home() {
  return (
    <>
      <Header />
      <main>
        <div>
          <Section title="Why Use Homework Manager?" centerContent>
            <p className="text-lg text-gray-600 leading-loose text-center max-w-2xl">
              Homework Manager helps you keep track of your homework
              assignments, set due dates, and stay organized. It&apos;s easy to
              use and helps you stay on top of your school work.
            </p>
          </Section>
          <Section title="Features">
            <div className="flex justify-between">
              <Feature
                icon="/checkcircle_icon.svg"
                title="Easy to Use"
                description="Our application is designed with ease of use in mind, making it simple for you to manage your homework."
              />
              <Feature
                icon="/tasks_icon.svg"
                title="Task Management"
                description="Efficiently manage your tasks and stay organized with our intuitive task management features."
              />
              <Feature
                icon="/shield_user_icon.svg"
                title="Secure"
                description="Your data is secure with us. We prioritize your privacy and ensure your information is protected."
              />
            </div>
          </Section>
        </div>
      </main>
    </>
  );
}
