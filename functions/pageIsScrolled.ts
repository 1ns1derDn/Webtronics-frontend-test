export default function pageIsScrolled(headerHeight: number): boolean {
  const yOffset = window.pageYOffset;
  return yOffset > headerHeight;
}