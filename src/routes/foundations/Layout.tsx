import { GoADivider, GoATable, GoABlock } from "@abgov/react-components";
import { ComponentContent } from "@components/component-content/ComponentContent.tsx";

export default function FoundationsLayoutPage() {
  return (
    
      <ComponentContent>
        <h1>Layout</h1>
        <h3>We use the layout as a structural template to support consistency across our services. By defining visual grids, spacing, and sections, we create intuitive services for our users.</h3>
        <GoADivider mt="2xl" mb="2xl"></GoADivider>
        <h3>The spacing scale</h3>
        <p>The Design System uses a spacing scale with a 16px base value to be used within layout spacing and spacing within components. See spacing for more information.</p>

        <GoADivider mt="2xl" mb="2xl"></GoADivider>
        <h2>Breakpoints</h2>
        <p>Default breakpoint sizing for different viewport widths are as follows:</p>
        <GoATable width="100%" variant="relaxed">
          <thead>
            <tr>
              <th>
                Breakpoint
              </th>
              <th>
                Viewport(px)
              </th>
              <th>
                Margin
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Small screen (mobile)
              </td>
              <td>
                &lt;624px
              </td>
              <td>
                16px
              </td>
            </tr>
            <tr>
              <td>
                Medium screen (tablet)
              </td>
              <td>
                624-1024px
              </td>
              <td>
                32px
              </td>
            </tr>
            <tr>
              <td>
                Large screen (desktop)
              </td>
              <td>
                &gt;1024px
              </td>
              <td>
                64px
              </td>
            </tr>
          </tbody>
        </GoATable>
        <h2>Margins</h2>
        <h3>Default margin</h3>
        <p>Margins provide a visual buffer between a view’s content and any content outside of the view’s bounds. These inset values create a space between the edges of the view’s bounds rectangle and the content inside the view.</p>

        <GoABlock mt="xl" mb="xl">
        <p><em>placeholder</em></p>
        </GoABlock>
        
        <GoADivider mt="2xl" mb="2xl"></GoADivider>

        <h2>Common layouts</h2>
        <h3>Basic form layout</h3>
        <p>A form layout uses a 2/3 content width with a default maximum page width of 960px. This ensures optimal line length (50-75 characters) and simplifies the content for the user. This layout is often used for external, citizen-facing forms.</p>
        
        <GoABlock mt="xl" mb="xl">
        <p><em>placeholder</em></p>
        </GoABlock>
        
        <h3>Basic form layout example</h3>
        <p>This layout is recommended for citizen facing applications where the content is simplified, and often broken down into one question per page.</p>
        
        <GoABlock mt="xl" mb="xl">
        <p><em>placeholder</em></p>
        </GoABlock>

        <GoADivider mt="2xl" mb="2xl"></GoADivider>
        
        <h3>Side navigation layout</h3>
        <p>A 2 column layout that has a fixed side navigation included by default with a fluid content container.</p>
        
        <GoABlock mt="xl" mb="xl">
        <p><em>placeholder</em></p>
        </GoABlock>
        
        <p>When designing for large screens, consider a max content width of 1464px to prevent the content from getting too wide.</p>
        <GoABlock mt="xl" mb="xl">
        <p><em>placeholder</em></p>
        </GoABlock>
        
        <h3>Side navigation layout example</h3>
        <p>A 2 column layout is often used for internal applications, where there is a need for a side navigation. </p>
        
        <GoABlock mt="xl" mb="xl">
        <p><em>placeholder</em></p>
        </GoABlock>
        
        <GoADivider mt="2xl" mb="2xl"></GoADivider>
        
        <h3>Side navigation and side bar layout</h3>
        <p>A 3 column layout that has a fixed side navigation as well as a second side panel on the right hand side. The third column is often used to show tertiary information, comments, or other documents alongside the main content area. Depending on your content, for large viewports it is recommended to use a max content width of 1176px on the main content area.</p>
        
        <GoABlock mt="xl" mb="xl">
        <p><em>placeholder</em></p>
        </GoABlock>
        
        <h3>Side navigation and sidebar layout example</h3>
        <p>A 3 column layout is often used for internal applications, where there is a need for both a side navigation as well as an additional section for notes or comments. </p>
        
        <GoABlock mt="xl" mb="xl">
        <p><em>placeholder</em></p>
        </GoABlock>
      </ComponentContent>
  );
}
