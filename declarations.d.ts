declare module '*.module.css' {
  const classes: Record<string, string> & {
    /**
     * The outermost bounding box of a component or section
     * For the root element of components that need width constraints
     * Typical Characteristics (max-width, margins, paddings)
     */
    container: string;
    /**
     * Intermediate layout element between container and content
     * When you need an additional layout layer between container and actual content
     * Typical Characteristics (internal spacing and positioning, background colors, flex/grid)
     */
    wrapper: string;
    /**
     * The innermost element holding actual page/components contents
     * For the main content area within a layout structure
     * Typical Characteristics (text, images, fonts)
     */
    content: string;
  };
  export default classes;
}

declare module '*.css' {
  const content: string;
  export default content;
}
