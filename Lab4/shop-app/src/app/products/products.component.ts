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
  products: Product[] = [
    {
      id: 0,
      name: 'Тостер Haley HY - 9603',
      description: 'Идеален для хлеба',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/he6/h42/83930058031134.jpg?format=gallery-medium'
      ],
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/haley-hy--9603-chernyi-serebristyi-113435172/?c=750000000'
    },
    {
      id: 1,
      name: 'Слюдяная пластина 51952',
      description: 'Для микроволновой печи',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb5/h66/85020342124574.jpg?format=gallery-medium'
      ],
      rating: 5,
      link: 'https://kaspi.kz/shop/p/sljudjanaja-plastina-51952-dlja-mikrovolnovoi-pechi-116236419/?c=750000000'
    },
    {
      id: 2,
      name: 'Хватайка мультиколор',
      description: 'Снековый автомат',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/peb/p3c/14198170.jpeg?format=gallery-medium'
      ],
      rating: 0,
      link: 'https://kaspi.kz/shop/p/hvataika-mul-tikolor-131718978/?c=750000000'
    },
    {
      id: 3,
      name: 'BAKU 948C',
      description: 'Вакуумный сепаратор',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/h00/ha9/79483275182110.jpg?format=gallery-medium'
      ],
      rating: 5,
      link: 'https://kaspi.kz/shop/p/baku-948c-109620636/?c=750000000'
    },
    {
      id: 4,
      name: 'Xiaomi Mijia Mi Home Induction Cooker Lite DCL002CM',
      description: 'Настольная плита',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/h02/h34/64223769493534.jpg?format=gallery-medium'
      ],
      rating: 5,
      link: 'https://kaspi.kz/shop/p/xiaomi-mijia-mi-home-induction-cooker-lite-dcl002cm-belyi-101149974/?c=750000000'
    },
    {
      id: 5,
      name: 'TVX поломоечная машина TVX T90/70R',
      description: 'Аккумуляторная компактная поломоечная машина с местом оператора',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/p1e/p9c/5883535.jpg?format=gallery-medium'
      ],
      rating: 0,
      link: 'https://kaspi.kz/shop/p/tvx-polomoechnaja-mashina-tvx-t90-70r-129280115/?c=750000000'
    },
    {
      id: 6,
      name: 'Spatty дарсонваль',
      description: 'Для электротерапии',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/h51/hb8/67900826615838.jpg?format=gallery-medium'
      ],
      rating: 5,
      link: 'https://kaspi.kz/shop/p/hvataika-mul-tikolor-131718978/?c=750000000'
    },
    {
      id: 7,
      name: 'Dynacord PowerMate 1000-3',
      description: 'Микшерный пульт, для дед инсайдов',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/he4/h46/63887419834398.jpg?format=gallery-medium'
      ],
      rating: 5,
      link: 'https://kaspi.kz/shop/p/dynacord-powermate-1000-3-100361579/?c=750000000'
    },
    {
      id: 8,
      name: 'Miele B484',
      description: 'Гладильная система',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/hd8/h69/80954875543582.jpg?format=gallery-medium'
      ],
      rating: 5,
      link: 'https://kaspi.kz/shop/p/miele-b4847-belyi-bordovyi-110575511/?c=750000000'
    },
    {
      id: 9,
      name: 'Мясорубка ZWILLON ZW-580',
      description: 'Идеальна для переговоров',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/h8d/hc3/84250114326558.jpg?format=gallery-medium'
      ],
      rating: 0,
      link: 'https://kaspi.kz/shop/p/zwillon-zw-580-serebristyi-113970662/?c=750000000'
    },
  ];

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
