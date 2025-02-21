import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  categories = ['Бытовая Техника', 'Телефоны и гаджеты', 'Сад и огород', 'Красота и здоровье', 'Аудиотехника'];
  selected = 'Бытовая Техника';
  products: Product[] = [
    {
      id: 0,
      name: 'Тостер Haley HY - 9603',
      description: 'Идеален для хлеба',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/he6/h42/83930058031134.jpg?format=gallery-medium'
      ],
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/haley-hy--9603-chernyi-serebristyi-113435172/?c=750000000',
      likes: 0,
      category: 'Бытовая Техника'
    },
    {
      id: 1,
      name: 'Слюдяная пластина 51952',
      description: 'Для микроволновой печи',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb5/h66/85020342124574.jpg?format=gallery-medium'
      ],
      rating: 5,
      link: 'https://kaspi.kz/shop/p/sljudjanaja-plastina-51952-dlja-mikrovolnovoi-pechi-116236419/?c=750000000',
      likes: 0,
      category: 'Бытовая Техника'
    },
    {
      id: 2,
      name: 'Хватайка мультиколор',
      description: 'Снековый автомат',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/peb/p3c/14198170.jpeg?format=gallery-medium'
      ],
      rating: 0,
      link: 'https://kaspi.kz/shop/p/hvataika-mul-tikolor-131718978/?c=750000000',
      likes: 0,
      category: 'Бытовая Техника'
    },
    {
      id: 3,
      name: 'BAKU 948C',
      description: 'Вакуумный сепаратор',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/h00/ha9/79483275182110.jpg?format=gallery-medium'
      ],
      rating: 5,
      link: 'https://kaspi.kz/shop/p/baku-948c-109620636/?c=750000000',
      likes: 0,
      category: 'Телефоны и гаджеты'
    },
    {
      id: 4,
      name: 'Xiaomi Mijia Mi Home Induction Cooker Lite DCL002CM',
      description: 'Настольная плита',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/h02/h34/64223769493534.jpg?format=gallery-medium'
      ],
      rating: 5,
      link: 'https://kaspi.kz/shop/p/xiaomi-mijia-mi-home-induction-cooker-lite-dcl002cm-belyi-101149974/?c=750000000',
      likes: 0,
      category: 'Бытовая Техника'
    },
    {
      id: 5,
      name: 'TVX поломоечная машина TVX T90/70R',
      description: 'Аккумуляторная компактная поломоечная машина с местом оператора',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/p1e/p9c/5883535.jpg?format=gallery-medium'
      ],
      rating: 0,
      link: 'https://kaspi.kz/shop/p/tvx-polomoechnaja-mashina-tvx-t90-70r-129280115/?c=750000000',
      likes: 0,
      category: 'Сад и огород'
    },
    {
      id: 6,
      name: 'Spatty дарсонваль',
      description: 'Для электротерапии',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/h51/hb8/67900826615838.jpg?format=gallery-medium'
      ],
      rating: 5,
      link: 'https://kaspi.kz/shop/p/spatty-darsonval--108452597/?c=750000000',
      likes: 0,
      category: 'Красота и здоровье'
    },
    {
      id: 7,
      name: 'Dynacord PowerMate 1000-3',
      description: 'Микшерный пульт, для дед инсайдов',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/he4/h46/63887419834398.jpg?format=gallery-medium'
      ],
      rating: 5,
      link: 'https://kaspi.kz/shop/p/dynacord-powermate-1000-3-100361579/?c=750000000',
      likes: 0,
      category: 'Аудиотехника'
    },
    {
      id: 8,
      name: 'Miele B484',
      description: 'Гладильная система',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/hd8/h69/80954875543582.jpg?format=gallery-medium'
      ],
      rating: 5,
      link: 'https://kaspi.kz/shop/p/miele-b4847-belyi-bordovyi-110575511/?c=750000000',
      likes: 0,
      category: 'Бытовая Техника'
    },
    {
      id: 9,
      name: 'Мясорубка ZWILLON ZW-580',
      description: 'Идеальна для переговоров',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/h8d/hc3/84250114326558.jpg?format=gallery-medium'
      ],
      rating: 0,
      link: 'https://kaspi.kz/shop/p/zwillon-zw-580-serebristyi-113970662/?c=750000000',
      likes: 0,
      category: 'Бытовая Техника'
    },
    {
      id: 10,
      name: 'Чехол Mcover',
      description: 'Для Xiaomi Redmi Note 12',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc2/h03/85019537276958.jpg?format=gallery-medium'
      ],
      rating: 0,
      link: 'https://kaspi.kz/shop/p/mcover-dlja-xiaomi-redmi-note-12-risunok-116230503/?c=750000000',
      likes: 0,
      category: 'Телефоны и гаджеты'
    },
    {
      id: 11,
      name: 'Смартфон Apple',
      description: 'iPhone 16 Pro 256Gb',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/hbc/h31/87295483445278.png?format=gallery-medium'
      ],
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-256gb-chernyi-123887732/?c=750000000',
      likes: 0,
      category: 'Телефоны и гаджеты'
    },
    {
      id: 12,
      name: 'Кабель Apple Lightning',
      description: 'USB TypeC (M) белый',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/h4b/hd8/87059455311902.png?format=gallery-medium',
      ],
      rating: 4.4,
      link: 'https://kaspi.kz/shop/p/kabel-apple-lightning-m-usb-typec-m-belyi-40500508/?c=750000000',
      likes: 0,
      category: 'Телефоны и гаджеты'
    },
    {
      id: 13,
      name: 'Радиотелефон DECROSS DC1013',
      description: 'Отлично подходит для необитаемого острова',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/p1f/p47/8780342.jpg?format=gallery-medium'
      ],
      rating: 5,
      link: 'https://kaspi.kz/shop/p/decross-dc1013-130169681/?c=750000000',
      likes: 0,
      category: 'Телефоны и гаджеты'
    },
    {
      id: 14,
      name: 'Аэлита морковь',
      description: 'Нанская 4',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/h74/hc3/67609030098974.jpg?format=gallery-medium'
      ],
      rating: 5,
      link: 'https://kaspi.kz/shop/p/aelita-morkov-nanskaja-4-108339447/?c=750000000',
      likes: 0,
      category: 'Сад и огород'
    },
    {
      id: 15,
      name: 'Грунт Terra Vita ',
      description: 'Живая земля универсальный 10л',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/h11/h94/86751801147422.jpg?format=gallery-medium'
      ],
      rating: 5,
      link: 'https://kaspi.kz/shop/p/grunt-terra-vita-zhivaja-zemlja-universal-nyi-10l-122254037/?c=750000000',
      likes: 0,
      category: 'Сад и огород'
    },
    {
      id: 16,
      name: 'Превикур Энерджи',
      description: '100 мл фунгицид Bayer',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/h01/hd6/87128457543710.jpg?format=gallery-medium'
      ],
      rating: 0,
      link: 'https://kaspi.kz/shop/p/previkur-enerdzhi-100-ml-fungitsid-bayer-123591817/?c=750000000',
      likes: 0,
      category: 'Сад и огород'
    },
    {
      id: 17,
      name: 'Круг синий, мультиколор',
      description: 'Ваше чадо не утонет',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/hfa/h7d/85816688377886.jpg?format=gallery-medium'
      ],
      rating: 5,
      link: 'https://kaspi.kz/shop/p/krug-7388005-106889732-sinii-mul-tikolor-118656334/?c=750000000',
      likes: 0,
      category: 'Сад и огород'
    },
    {
      id: 18,
      name: 'Colgate зубная паста',
      description: 'Тройное действие Экстра отбеливание 100 мл',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/h72/ha9/86243149185054.png?format=gallery-medium'
      ],
      rating: 4,
      link: 'https://kaspi.kz/shop/p/colgate-zubnaja-pasta-troinoe-deistvie-ekstra-otbelivanie-100-ml-120260946/?c=750000000',
      likes: 0,
      category: 'Красота и здоровье'
    },
    {
      id: 19,
      name: 'Kotex прокладки',
      description: 'Ultra Night Duo 14 шт',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/p78/pf0/25958573.jpg?format=gallery-medium'
      ],
      rating: 0,
      link: 'https://kaspi.kz/shop/p/kotex-prokladki-ultra-night-duo-14-sht-100931591/?c=750000000',
      likes: 0,
      category: 'Красота и здоровье'
    },
    {
      id: 20,
      name: 'Ollin Professional Perfect Hair 15 в 1',
      description: 'Крем-спрей 250 мл',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/p3c/pb5/21586295.jpg?format=gallery-medium'
      ],
      rating: 5,
      link: 'https://kaspi.kz/shop/p/ollin-professional-perfect-hair-15-v-1-krem-sprei-250-ml-100008645/?c=750000000',
      likes: 0,
      category: 'Красота и здоровье'
    },
    {
      id: 21,
      name: 'Relux ватные диски Econom',
      description: '120 шт',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/pb4/pde/19091457.jpg?format=gallery-medium'
      ],
      rating: 0,
      link: 'https://kaspi.kz/shop/p/relux-vatnye-diski-econom-120-sht-109433020/?c=750000000',
      likes: 0,
      category: 'Красота и здоровье'
    },
  ];

  getfilteredProducts(){

    var filtered = []
    for(var i = 0; i < this.products.length; i++){
      if(this.products[i].category === this.selected){
        filtered.push(this.products[i]);
      }
    } 
    return filtered;
  }

  selectCategory(event : any){
    this.selected = event?.target.value;
  }

  removeProduct(id : number){
    var newProducts = []
    for(var i = 0; i < this.products.length; i++){
      if(this.products[i].id !== id){
        newProducts.push(this.products[i]);
      }
    }
    this.products = newProducts;
  }

  likeProduct(id : number){
    for(var i = 0; i < this.products.length; i++){
      if(this.products[i].id === id){
        this.products[i].likes += 1;
      }
    }
  }

  share(product: Product, platform: string) {
    const url = encodeURIComponent(product.link);
    let shareLink = '';

    if (platform === 'whatsapp') {
      shareLink = `https://api.whatsapp.com/send?text=Check out this product: ${url}`;
    } else if (platform === 'telegram') {
      shareLink = `https://t.me/share/url?url=${url}&text=Check out this product`;
    }

    window.open(shareLink, '_blank');
  }
}
