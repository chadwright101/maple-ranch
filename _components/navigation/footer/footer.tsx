import { MobileFooter } from "./mobile/mobile-footer";
import { DesktopFooter } from "./desktop/desktop-footer";

export function Footer() {
  return (
    <footer className="bg-white mt-10 border-t-2 border-black/25">
      <MobileFooter />
      <DesktopFooter />
    </footer>
  );
}
