//dropdown types

export interface SubSubDrodownItem {
  name: string;
  link: string;
}

export interface SubDropdownItem {
  name: string;
  subSubDrop: SubSubDrodownItem[];
}

export interface DropdownItem {
  name: string;
  subDropdown: SubDropdownItem[];
  logoSrc: string;
}

export type DropDownItems = DropdownItem[];
export type SubDropDownItems = SubDropdownItem[];
export type SubSubDropDownItems = SubSubDrodownItem[];

//offerSlice types

export interface IOffer {
  id: number;
  slug: string;
  title: string;
  category: {
    id: number;
    slug: string;
    href: string;
    path: string;
    is_maincategory: boolean;
    is_secondarycategory: boolean;
    title: string;
    title_en: string;
  };
  description: string | null;
  path: string;
  rating: number;
  tags: string[];
}

export interface IOffersState {
  offers: IOffer[];
  status: "idle" | "loading" | "resolved" | "rejected";
  error: string | null | unknown;
}
