/** Assets */
export { Basket } from "./assets/svg/Basket";
export { BlueClose, Close, WhiteClose } from "./assets/svg/CloseIcons";
export { Catalog } from "./assets/svg/Catalog";
export { DropDown, DropUp } from "./assets/svg/Drops";
export { Present } from "./assets/svg/Present";
export { Search } from "./assets/svg/Search";
export { UserAccount } from "./assets/svg/UserAccount";
export { Wishlist } from "./assets/svg/Wishlist";
export {
  LeftArrow,
  LeftStep,
  DownStep,
  RightArrow,
  CategoryArrow,
} from "./assets/svg/Arrows";
export {
  ApplePayLogo,
  GooglePayLogo,
  MasterCardLogo,
  VisaLogo,
} from "./assets/svg/PaySystems";
export { LocationPointLogo } from "./assets/svg/LocationPointLogo";
export {
  FacebookLogo,
  WhatsAppLogo,
  TelegramLogo,
  TikTokLogo,
  TweeterLogo,
  InstagramLogo,
  EmailLogo,
} from "./assets/svg/SocialMedia";
export { LoginIcon, RegistrationIcon } from "./assets/svg/ModalAuth";
export { PasswordHide, PasswordShow } from "./assets/svg/PasswordIcons";
export { TryAgainIcon } from "./assets/svg/TryAgainIcon";
export { Plus } from "./assets/svg/Plus";
export { FilterIcon } from "./assets/svg/Filter";

/** Hooks */
export { useNetwork } from "./hooks/useNetwork";
export { useAuth } from "./hooks/useAuth";
export { useTypedNavigate } from "./hooks/useTypedNavigate";
export { useInterval } from "./hooks/useInterval";
export { useHideOnScroll } from "./hooks/useHideOnScroll";
export { useHorizontalScroll } from "./hooks/useHorizontalScroll";
export { useScreenWidth } from "./hooks/useScreenWidth";
export { useGetCurrentLang } from "./hooks/useGetCurrentLang";

/** Types */
export type { User, RoleUnion } from "./types/User";
export type { Banner } from "./types/Banner";
export type { Children } from "./types/CommonTypes";
export type { ProductCardType } from "./types/ProductTypes";
export type { StylePropType } from "./types/Styles";
export type {
  TRHeader,
  TRFooter,
  TRHelp,
  TRLang,
  TRRandomPresent,
  TRFilters,
  TRSorts,
} from "./types/Translation";
export type { Categories, CatalogSub } from "./types/Categories";

/** Constants */
export { ADMIN, MANAGER, GUEST_USER, AUTH_USER } from "./constants/roles";
export { SCREEN } from "./constants/screens";
export { DIRECTION } from "./constants/direction";
export {
  MAX_DEFAULT,
  MAX_PRICE,
  MIN_DEFAULT,
  DIFFER,
  MIN_PRICE,
} from "./constants/price";
export { PAGE_OPTIONS } from "./constants/pageOptions";
export { PAGINATION_LOAD } from "./constants/pagination";

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
export { default as RangePriceRandom } from "./UI/Range/RangePriceRandom";
export { default as RangeWithInputs } from "./UI/Range/RangeWithInputs";
export { default as RandomStep } from "./UI/RandomStep";
export { default as Checkbox } from "./UI/Checkbox";
export { default as GoToSaleButton } from "./UI/Buttons/GoToSaleButton";
export { default as CategoryButton } from "./UI/Buttons/CategoryButton";
export { default as ListContainer } from "./UI/ListContainer";
export { default as ImgWithPreloader } from "./UI/ImgWithPreloader";
export { default as Pagination } from "./UI/Pagination";
export { default as Select } from "./UI/Select";
export { default as RadioButton } from "./UI/RadioButton";
export { default as ButtonWithIcon } from "./UI/Buttons/ButtonWithIcon";
