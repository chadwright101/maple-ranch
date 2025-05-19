import { MobileFooter } from "./mobile/mobile-footer";
import { DesktopFooter } from "./desktop/desktop-footer";

export function Footer() {
  return (
    <footer className="bg-white mt-10 desktop:px-25 border-t-2 border-blue/25">
      <MobileFooter />
      <DesktopFooter />
    </footer>
  );
}
