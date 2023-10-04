/** Assets */
export { Basket } from "./assets/svg/Basket";
export { BlueClose, Close, WhiteClose } from "./assets/svg/CloseIcons";
export { Catalog } from "./assets/svg/Catalog";
export { DropDown, DropUp } from "./assets/svg/Drops";
export { Present } from "./assets/svg/Present";
export { Search } from "./assets/svg/Search";
export { UserAccount } from "./assets/svg/UserAccount";
export { Wishlist } from "./assets/svg/Wishlist";
export { LeftArrow, LeftStep, DownStep, CategoryArrow } from "./assets/svg/Arrows";
export { RightArrow } from "./assets/svg/RightArrow";
export { ApplePayLogo } from "./assets/svg/ApplePayLogo";
export { GooglePayLogo } from "./assets/svg/GooglePayLogo";
export { MasterCardLogo } from "./assets/svg/MasterCardLogo";
export { VisaLogo } from "./assets/svg/VisaLogo";
export { LocationPointLogo } from "./assets/svg/LocationPointLogo";
export { EmailLogo } from "./assets/svg/EmailLogo";
export { WhatsAppLogo } from "./assets/svg/WhatsAppLogo";
export { TelegramLogo } from "./assets/svg/TelegramLogo";
export { TikTokLogo } from "./assets/svg/TikTokLogo";
export { TweeterLogo } from "./assets/svg/TweeterLogo";
export { FacebookLogo } from "./assets/svg/FacebookLogo";
export { InstagramLogo } from "./assets/svg/InstagramLogo";
export { LoginIcon, RegistrationIcon } from "./assets/svg/ModalAuth";
export { PasswordHide, PasswordShow } from "./assets/svg/PasswordIcons";
export { TryAgainIcon } from "./assets/svg/TryAgainIcon";
export { Plus } from "./assets/svg/Plus";

/** Hooks */
export { useNetwork } from "./hooks/useNetwork";
export { useAuth } from "./hooks/useAuth";
export { useTypedNavigate } from "./hooks/useTypedNavigate";
export { useTypedTranslation } from "./hooks/useTypedTranslation";
export { useInterval } from "./hooks/useInterval";
export { useHideOnScroll } from "./hooks/useHideOnScroll";
export { useHorizontalScroll } from "./hooks/useHorizontalScroll";
export { useScreenWidth } from "./hooks/useScreenWidth";

/** Types */
export type { User, RoleUnion } from "./types/User";
export type { Banner } from "./types/Banner";
export type { Children } from "./types/CommonTypes";
export type { ProductCardType } from "./types/ProductTypes";
export type { StylePropType, DirectionUnionType } from "./types/Styles";

/** Constants */
export { ADMIN, MANAGER, GUEST_USER, AUTH_USER } from "./constants/roles";
export { arrayCategories } from "./assets/svg/Categories";
export { getSubImg } from "./assets/webp/subcategories";

/** UI  */
export { default as Preloader } from "./UI/Preloader";
export { default as StarRate } from "./UI/StarRate";
export { default as Logo } from "./UI/Logo";
export { default as SeeMoreButton } from "./UI/Buttons/SeeMoreButton";
export { default as UpArrow } from "./UI/Buttons/UpArrow";
export { default as ModalContainer } from "./UI/ModalContainer";
export { default as ModalHeader } from "./UI/ModalHeader";
export { default as InputContainer } from "./UI/InputContainer";
export { default as InputPassword } from "./UI/InputPassword";
export { default as ProductSection } from "./UI/ProductSection";
export { default as RangePrice } from "./UI/RangePrice";
export { default as RandomStep } from "./UI/RandomStep";
export { default as Checkbox } from "./UI/Checkbox";
