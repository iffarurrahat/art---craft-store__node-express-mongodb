import { Zoom } from "react-awesome-reveal";
import Container from "../ui/Container";

const FAQ = () => {
  return (
    <Container>
      <div className="mb-16 font-roboto">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-6xl mb-5 font-bold">{`FAQ's`}</h2>
          <p className="w-full md:w-2/3 lg:w-1/2 mx-auto">
            Comprehensive Guide to Acrylic Portrait Canvas Art: Understanding,
            Caring, Commissioning, and Benefits of Using Acrylic Paints for Your
            Artistic Creations
          </p>
        </div>
        <Zoom delay={200}>
          <div className="space-y-3 w-full md:w-3/4 mx-auto">
            {/* collapse-1 */}
            <div className="collapse collapse-plus bg-base-200/30 shadow p-4">
              <input type="checkbox" />
              <div className="collapse-title font-medium">
                What is an acrylic portrait canvas?
              </div>
              <div className="collapse-content">
                <p>
                  An acrylic portrait canvas is a piece of art where an artist
                  uses acrylic paints to create a detailed portrait on a canvas
                  surface. Acrylic paints are known for their vibrant colors and
                  quick-drying properties, making them ideal for detailed and
                  expressive portrait work.
                </p>
              </div>
            </div>
            {/* collapse-2 */}
            <div className="collapse collapse-plus bg-base-200/30 shadow p-4">
              <input type="checkbox" />
              <div className="collapse-title font-medium">
                How do I care for an acrylic portrait canvas?
              </div>
              <div className="collapse-content">
                <p>
                  To care for your acrylic portrait canvas, keep it away from
                  direct sunlight and humidity to prevent fading and damage.
                  Dust it regularly with a soft, dry cloth, and avoid using
                  water or cleaning agents, as they can harm the paint and
                  canvas.
                </p>
              </div>
            </div>
            {/* collapse-3 */}
            <div className="collapse collapse-plus bg-base-200/30 shadow p-4">
              <input type="checkbox" />
              <div className="collapse-title font-medium">
                Can I commission a custom acrylic portrait?
              </div>
              <div className="collapse-content">
                <p>
                  Yes, many artists accept commissions for custom acrylic
                  portraits. You can provide a photo or a detailed description
                  of the subject, and the artist will create a personalized
                  piece for you. Make sure to discuss the size, style, and any
                  specific requests with the artist beforehand.
                </p>
              </div>
            </div>
            {/* collapse-4 */}
            <div className="collapse collapse-plus bg-base-200/30 shadow p-4">
              <input type="checkbox" />
              <div className="collapse-title font-medium">
                What makes acrylic paints suitable for portraits?
              </div>
              <div className="collapse-content">
                <p>
                  Acrylic paints are popular for portraits due to their
                  versatility and vibrant color range. They dry quickly,
                  allowing artists to layer colors and add fine details
                  efficiently. Additionally, acrylics are water-resistant once
                  dry, ensuring the longevity of the artwork.
                </p>
              </div>
            </div>
          </div>
        </Zoom>
      </div>
    </Container>
  );
};

export default FAQ;
