// import { Helmet } from "react-helmet-async";
import Container from "../../components/ui/Container";

const PrivacyPolicy = () => {
  return (
    <>
      {/* <Helmet>
        <title>Art & Craft || Privacy Policy</title>
      </Helmet> */}
      <div className="mt-[83px] bg-gray-100">
        <Container>
          <div className="container mx-auto px-4 py-8  text-gray-800">
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-center">Privacy Policy</h1>
              <p className="text-center text-lg mt-2">
                Effective Date: [Insert Date]
              </p>
            </header>

            <section className="bg-white shadow-md rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p>
                Welcome to Art and Craft | Acrylic Portrait Canvas. We value
                your privacy and are committed to protecting your personal
                information. This privacy policy explains how we collect, use,
                and safeguard your information when you visit our website.
              </p>
            </section>

            <section className="bg-white shadow-md rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-4">
                2. Information We Collect
              </h2>
              <ul className="list-disc pl-6">
                <li>
                  <strong>Personal Information:</strong> We may collect personal
                  information such as your name, email address, and contact
                  details.
                </li>
                <li>
                  <strong>Usage Data:</strong> We may collect information on how
                  you access and use our website, including your IP address,
                  browser type, and usage patterns.
                </li>
              </ul>
            </section>

            <section className="bg-white shadow-md rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-4">
                3. How We Use Your Information
              </h2>
              <ul className="list-disc pl-6">
                <li>To provide and maintain our website</li>
                <li>To notify you about changes to our website</li>
                <li>
                  To allow you to participate in interactive features of our
                  website
                </li>
                <li>To provide customer support</li>
                <li>
                  To gather analysis or valuable information so that we can
                  improve our website
                </li>
                <li>To monitor the usage of our website</li>
              </ul>
            </section>

            <section className="bg-white shadow-md rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-4">
                4. Sharing Your Information
              </h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal
                information to outside parties. This does not include trusted
                third parties who assist us in operating our website, conducting
                our business, or serving you, so long as those parties agree to
                keep this information confidential.
              </p>
            </section>

            <section className="bg-white shadow-md rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-4">
                5. Security of Your Information
              </h2>
              <p>
                We use administrative, technical, and physical security measures
                to help protect your personal information. While we have taken
                reasonable steps to secure the personal information you provide
                to us, please be aware that despite our efforts, no security
                measures are perfect or impenetrable, and no method of data
                transmission can be guaranteed against any interception or other
                type of misuse.
              </p>
            </section>

            <section className="bg-white shadow-md rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-4">
                6. Changes to This Privacy Policy
              </h2>
              <p>
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the `Effective Date` at the top of this
                Privacy Policy. You are advised to review this Privacy Policy
                periodically for any changes.
              </p>
            </section>

            <section className="bg-white shadow-md rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
              <p>
                <strong>Email:</strong> [Insert Your Email]
              </p>
              <p>
                <strong>Address:</strong> [Insert Your Address]
              </p>
            </section>

            <footer className="text-center py-4">
              <p className="text-gray-600">
                &copy; [Year] Art and Craft | Acrylic Portrait Canvas. All
                rights reserved.
              </p>
            </footer>
          </div>
        </Container>
      </div>
    </>
  );
};

export default PrivacyPolicy;
