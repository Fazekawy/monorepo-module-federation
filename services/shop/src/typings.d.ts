declare module '*.module.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.jpg'
declare module '*.jpeg'
declare module '*.png'
declare module '*.gif'

declare module "*.svg" {
	import React from "react";
	const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
	export default SVG;
}

declare const __PLATFORM__: "mobile" | "desktop";