import { GoADivider } from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent.tsx";

export default function ImagesPage() {
  return (
      <ComponentContent tocCssQuery="h2[id], h3[id]">
        <h1>Photography</h1>
        <h3>The Government of Alberta (GoA) maintains a library of photos specifically taken for government use, ensuring they are relevant to our citizens. This collection meets our established criteria for quality and accessibility.</h3>

        <GoADivider mt="2xl" mb="2xl"></GoADivider>
        <div className="max-width-72ch">

          <h2 id="goa-photo-library">GoA photo library</h2>
          <p>Our photo library offers an extensive collection of photos on various subjects. All these photos comply with the Government of Alberta (GoA) brand and content guidelines and are free to use for all our projects.</p>
          <p>The library can be accessed by all GoA staff and contractors. To learn how to access our photo library, please see our detailed instructions on <a href="https://goa-dio.atlassian.net/l/cp/3TYiz5gU" target="_blank">Confluence</a>.</p>

          <h3 id="photos-sensitive-subjects">Photos for sensitive subjects</h3>
          <p>Before using any image for a sensitive subject like homelessness or child abuse, we recommend that you consult with Communications and Public Engagement (CPE) to ensure that the person in the image can be used for sensitive matters.</p>

          <h2 id="stock-photos">When to use stock photos</h2>
          <p>When an appropriate photo is unavailable in the government's photo library, stock photos can be used as an alternative to find photos that fit the needs of your project.</p>

          <h3 id="photo-selection">Photo selection guidelines</h3>
          <p>If you are required to use a stock photo, ensure to carefully select the image that meet the following criteria:</p>
          <ul>
            <li><strong>Regional authenticity</strong>: The photos should be shot in Alberta or should not depict any identifying elements from a location outside Alberta.</li>
            <li><strong>Location specific</strong>: While referencing a specific location, e.g. a specific town, provincial park or geographic location, the photo should be of that location.</li>
            <li><strong>Generic photos</strong>: Photos like a person writing or typing, food, person receiving an injection, etc. do not need to be from Alberta.</li>
            <li><strong>Local elements</strong>: Photos depicting safety equipment, vegetation, plants, and animals should be appropriate or native to Alberta.</li>
          </ul>
          <p>Read about copyright law and usage guidelines in the <a href="https://open.alberta.ca/dataset/afb907e6-eb1b-4bb6-a4bc-659582a1038e/resource/3a1b9758-d3b2-46ef-be59-cc07351ee59c/download/cpe-goa-identitypolicy-2019-reissue.pdf" target="_blank">GoA's Identity Policy manual</a>.</p>

          <h2 id="resolution">Resolution</h2>
          <p>When resizing images for the web, we advise adjusting the image dimensions to keep the file sizes small enough to load quickly while maintaining a good image quality to provide clarity.</p>

          <h2 id="format">Format</h2>
          <p>We typically use images in JPG or PNG format especially for photos. SVG is recommended for icons and illustrations to make them scalable while maintaining quality. Illustrations can also be used in a PNG format if needed.</p>

          <h2 id="best-practices">Best practices</h2>
          <h3 id="accessibility">Accessibility</h3>

          <ul>
            <li>Support your images with alternative text or captions to enable people with disabilities using screen readers or assistive technologies to access your images.</li>
            <li>Avoid presenting essential readable text inside an image as it cannot be accessed with assistive technologies. If you need to do so, make sure the same text is included in the alternative text or caption.</li>
            <li>We recommend not to place text or icons on images. If you need to do so, ensure that the image used as a background provides sufficient contrast to make it legible and easily readable.</li>
          </ul>

          <p>If you are working with images, please make sure to reference <a href="https://www.w3.org/WAI/tutorials/images/" target="_blank">W3C's Images tutorial</a> to know the accessibility best practices for various image formats.</p>
        </div>
      </ComponentContent>
  );
}
