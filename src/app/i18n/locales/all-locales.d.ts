interface AllLocalesType {
  translation: {
    footer_sections: {
      follow_us: string;
      contact_us: string;
      copyright: string;
      help: string;
    };

    help_section: {
      faq: string;
      offer_contract: string;
      payment_delivery: string;
      return_conditions: string;
      privacy_policy: string;
    };

    header_links: {
      secret_present: string;
      about: string;
      contacts: string;
      catalog: string;
    };

    contacts_popup: {
      header: string;
      email: string;
      telegram: string;
    };

    product_sections: {
      popular: string;
      new: string;
    };

    random_present: {
      headers: string[];
      steps: string[];
      btn_get_present: string;
    };

    win_random_section: {
      title: string;
      btn_try_again: string;
    };

    person: {
      name: string;
      last_name: string;
    };

    lang: {
      en: string;
      ua: string;
    };

    login_popup: {
      header: string;
      btn: string;
      wishlist_error: string;
    };

    input_password: {
      ph: string;
      ph_create: string;
      ph_repeat: string;
      remind_password: string;
      rules: string[];
    };

    registr_popup: {
      header: string;
      btn: string;
    };

    ph_email: string;
    ph_search: string;
    tricked_line_text: string;

    btn_go_sale: string;
    btn_make_order: string;
    btn_show_more: string;
    btn_know_more: string;
    btn_add_to_basket: string;

    enter_as_header: string;

    checkbox_remember_person: string;

    or: string;

    filters_title: string;
    filters: {
      sale: string;
      available: string;
    };
    rate: string;
    price: string;
    sorts_title: string;

    sorts: {
      cheap: string;
      expensive: string;
      new: string;
      popular: string;
      rate: string;
    };

    main_page: string;

    bc: {
      by_category: string;
      by_search_name: string;
    };

    buy_together_section: string;
    select_productNum: string;

    categories: {
      backpack: string;
      keychain: string;
      laptopBackpack: string;
      shopper: string;
      hoodies: string;
      plaids: string;
      slippers: string;
      socks: string;
      tshirts: string;
      bottles: string;
      lunchboxes: string;
      mugs: string;
      termomugs: string;
      candies: string;
      cocktails: string;
      coffee: string;
      secret_cookies: string;
      tea: string;
      TDpuzzles: string;
      boardGames: string;
      puzzles: string;
      books: string;
      courses: string;
      datebook: string;
      magboard: string;
      notebooks: string;
      pens: string;
      headphones: string;
      keyboards: string;
      lamps: string;
      massagers: string;
      powerbanks: string;
    };
  };
}

type TranslationKeys = keyof AllLocalesType["translation"];
