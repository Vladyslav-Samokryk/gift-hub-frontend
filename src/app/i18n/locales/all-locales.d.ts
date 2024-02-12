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
      reviewed: string;
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

    secret_gift: {
      title: string;
      subtitles: string[];
      process_header: string;
      process_steps: string[];
      try_button: string;
      btn_start: string;
      select_price: string;
      select_category: string;
      ph_select: string;
      win_title: string;
    };

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
    filter_popup_header: string;
    sort_popup_header: string;

    bth_reset: string;
    btn_apply: string;

    all_categories: string;

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
    comments: {
      header: string;
      all_comments: string;
      non_found: {
        header: string;
        description: string;
      };
      write_comment: {
        header: string;
        description: string;
      };
      max_comment_length: string;
      btn_add_comment: string;
    };

    global_rate: string;
    rate_by_criteria: {
      quality: string;
      photo_match: string;
      description_match: string;
      price: string;
    };

    characteristics: {
      description: string;
      pay_deliver: string;
      faq: string;
    };

    availability: {
      _true: string;
      _false: string;
    };

    btn_be_noticed: string;
    product_code: string;

    basket: {
      heading: string;
      priceText: string;
      discountText: string;
      totalPriceText: string;
      orderButtonText: string;
      empty: {
        heading: string;
        description: string;
      };
    };

    faq: Array<{
      question: string;
      answer: string;
    }>;

    delivery: string[];
    btn_to_basket: string;

    checkout: {
      title: string;
      ph: {
        surname: string;
        name: string;
        email: string;
        tel: string;
        town: string;
        address: string;
        building: string;
        flat: string;
        office: string;
      };
      section: {
        info: string;
        delivery: {
          title: string;
          self: string;
          nova_poshta: string;
          ukr_poshta: string;
          in_office: string;
          by_courier: string;
          price: {
            free: string;
            by_tariff: string;
          };
        };
        payment: {
          title: string;
          cash: string;
          card: string;
        };
        additional: {
          title: string;
          add_comment: string;
          not_recall: string;
          another_person: string;
          present: string;
        };
      };
      errors: {
        required: string;
        tel: string;
        email: string;
        comment: {
          small: string;
          big: string;
        };
      };
      success: {
        title: string;
        description: string;
      };
      bill: {
        title: string;
        total: string;
      };
      btn: string;
    };
    offer_contract: {
      main_title: string;
      title: string;
      subtitle: string[];
      text: {
        first: string[];
        second: string[];
        third: string[];
        fourth: string[];
        fifth: string[];
        sixth: string[];
      };
      sub_text: {
        first: string[];
        second: string[];
        third: string[];
        fourth: string[];
        fifth: string[];
      };
    };

    payment_and_delivery: {
      main_title: string;
      text: string[];
    };

    return_conditions: {
      main_title: string;
      text: string[];
    };

    privacy_police: {
      main_title: string;
      text: string[];
    };
  };
}

type TranslationKeys = keyof AllLocalesType["translation"];
