//Navbar
export interface NavbarProps {
  toggleTheme: () => void;
  modeTheme: "light" | "dark";
}

export interface ServiceButtonsProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  open: boolean;
  toggleTheme: () => void;
  modeTheme: "light" | "dark";
}

export interface NavbarMenuProps {
  anchorEl: null | HTMLElement;
  open: boolean;
  handleClose: () => void;
}

//Sidebar
export interface SidebarItems {
  id: number;
  title: string;
  icon: React.ReactNode;
  link: string;
}

export interface SidebarProps {
  sidebarList: SidebarItems[];
}

//Modal
export interface ModalProps {
  handleClose: () => void;
  isOpen: boolean;
}

//AddButton
export interface AddButtonProps {
  handleOpen: () => void;
}
