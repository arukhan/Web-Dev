import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../productitem/productitem.component';
import { ProductItem } from '../productitem';


@Component({
  selector: 'app-products',
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductsComponent {
  @Input() selectedCategory: string = 'All';
  productItemList: ProductItem[] = [
    {
    id: 1,
    name: 'Round Lab 1025 Dokdo Cleanser пенка 150 мл',
    images: ['assets/products/1.jpg', 'assets/products/1_1.jpg', 'assets/products/1_2.jpg', 'assets/products/1_3.jpg'],
    description: 'Cleansing foam based on sea water gently and gently removes make-up residues and micro-dust that imperceptibly settles on our body, providing gentle hydration, the skin acquires a clean, healthy and radiant appearance.',
    rating: 4.8,
    link: 'https://kaspi.kz/shop/p/round-lab-1025-dokdo-cleanser-penka-150-ml-117662418/?c=750000000',
    category: 'Cleansing Foam',
    likes: 0
  },
  {
    id: 2,
    name: 'Round Lab крем Birch Juice Moisturizing SPF50 для лица 50 мл',
    images: ['assets/products/2.jpg', 'assets/products/2_1.jpg', 'assets/products/2_2.jpg', 'assets/products/2_3.jpg'],
    description: 'Sunscreen with birch sap and hyaluronic acid provides reliable protection against ultraviolet radiation, while providing deep hydration, retaining moisture inside for a long time, preventing dehydration of the skin, helping to get rid of dryness, flaking, irritation and itching.',
    rating: 4.8,
    link: 'https://kaspi.kz/shop/p/round-lab-krem-birch-juice-moisturizing-spf50-dlja-litsa-50-ml-105263927/?c=750000000',
    category: 'Sunscreen',
    likes: 0
  },
  {
    id: 3,
    name: 'Round Lab крем Birch Juice Moisturizing для лица 80 мл',
    images: ['assets/products/3.jpg', 'assets/products/3_1.jpg', 'assets/products/3_2.jpg', 'assets/products/3_3.jpg'],
    description: '345 Relief Cream with niacinamide soothes, hydrates, and supports post-acne recovery with panthenol and cactus extract.',
    rating: 5.0,
    link: 'https://kaspi.kz/shop/p/round-lab-krem-birch-juice-moisturizing-dlja-litsa-80-ml-105496795/?c=750000000',
    category: 'Cream',
    likes: 0
  },
  {
    id: 4,
    name: 'Celimax Dual Barrier Creamy Toner',
    images: ['assets/products/4.jpg', 'assets/products/4_1.jpg', 'assets/products/4_2.jpg', 'assets/products/4_3.jpg'],
    description: 'It restores the acid-base balance of the skin, maintains an optimal level of hydration in the skin and regulates the sebaceous glands.',
    rating: 4.5,
    link: 'https://kaspi.kz/shop/p/round-lab-toner-1025-dokdo-200-ml-104770477/?c=750000000',
    category: 'Toner',
    likes: 0
  },
  {
    id: 5,
    name: 'Round Lab тонер Birch Juice Moisturizing 300 мл',
    images: ['assets/products/5.jpg', 'assets/products/5_1.jpg', 'assets/products/5_2.jpg', 'assets/products/5_3.jpg'],
    description: 'Moisturizing toner with birch sap replenishes the lack of moisture in the cells of the epidermis, normalizes the hydro-lipid balance, and instantly eliminates dryness and tightness.',
    rating: 4.6,
    link: 'https://kaspi.kz/shop/p/round-lab-toner-birch-juice-moisturizing-300-ml-104060780/?c=750000000',
    category: 'Toner',
    likes: 0
  },
  {
    id: 6,
    name: 'Round Lab крем Mugwort Calming для лица 80 мл',
    images: ['assets/products/6.jpg', 'assets/products/6_1.jpg', 'assets/products/6_2.jpg', 'assets/products/6_3.jpg'],
    description: 'Soothing cream with mugwort extract perfectly soothes the skin while providing hydration, eliminating itching and inflammation, evening out tone and restoring brightness to dull tones.',
    rating: 5.0,
    link: 'https://kaspi.kz/shop/p/anua-syvorotka-peach-70-niacin-dlja-litsa-30-ml-114423608/?c=750000000',
    category: 'Cream',
    likes: 0
  },
  {
    id: 7,
    name: 'Round Lab крем Mugwort Calming для лица 80 мл',
    images: ['assets/products/7.jpg', 'assets/products/7_1.jpeg', 'assets/products/7_2.jpg', 'assets/products/7_3.jpg'],
    description: "Round Lab's new product is Soybean Panthenol Cream, a revitalizing cream with black soy seed extract and panthenol, relieves redness and irritation, saturates moisture, and softens rough skin areas.",
    rating: 4.8,
    link: 'https://kaspi.kz/shop/p/round-lab-krem-mugwort-calming-dlja-litsa-80-ml-105831837/?c=750000000',
    category: 'Cream',
    likes: 0
  },
  {
    id: 8,
    name: 'Round Lab тонер Pine Calming Cica 250 мл',
    images: ['assets/products/8.jpg', 'assets/products/8_1.jpg', 'assets/products/8_2.jpg', 'assets/products/8_3.jpg'],
    description: "Tonic with pine and centella extracts for problem skin has a pronounced anti-inflammatory and antibacterial effect, accelerates the healing of acne and inflammation.",
    rating: 4.7,
    link: 'https://kaspi.kz/shop/p/round-lab-toner-pine-calming-cica-250-ml-108844132/?c=750000000',
    category: 'Toner',
    likes: 0
  },
  {
    id: 9,
    name: 'Round Lab Soybean пенка 150 мл',
    images: ['assets/products/9.jpg', 'assets/products/9_1.jpg', 'assets/products/9_2.jpg', 'assets/products/9_3.jpg'],
    description: 'Soybean Cleanser Soybean Cleanser is an effective remedy for skin imperfections developed by the innovative Korean company Round Lab.',
    rating: 5.0,
    link: 'https://kaspi.kz/shop/p/round-lab-soybean-penka-150-ml-105850552/?c=750000000',
    category: 'Cleansing Foam',
    likes: 0
  },
  {
    id: 10,
    name: 'Round Lab крем Soybean Nourishing для лица 80 мл',
    images: ['assets/products/10.jpg', 'assets/products/10_1.jpg', 'assets/products/10_2.jpg', 'assets/products/10_3.jpg'],
    description: 'Nourishing soy-based cream perfectly nourishes the skin thanks to ceramide. The cream contains adenosine, which reduces wrinkles and nourishes the skin. Thanks to its special cream texture, the cream moisturizes and nourishes the skin.',
    rating: 4.9,
    link: 'https://kaspi.kz/shop/p/round-lab-krem-soybean-nourishing-dlja-litsa-80-ml-105264937/?c=750000000',
    category: 'Cream',
    likes: 0
  },
  {
    id: 11,
    name: 'Round Lab Mugwort Calming Cleanser пенка 150 мл',
    images: ['assets/products/11.jpg', 'assets/products/11_1.jpg', 'assets/products/11_2.jpg'],
    description: 'The foam is perfect for daily washing of sensitive and problematic skin due to its gentle formula.',
    rating: 4.8,
    link: 'https://kaspi.kz/shop/p/round-lab-mugwort-calming-cleanser-penka-150-ml-112620269/?c=750000000',
    category: 'Cleansing Foam',
    likes: 0
  },
  {
    id: 12,
    name: 'Round Lab Dokdo Cleansing Oil гидрофильное масло 150 мл',
    images: ['assets/products/12.jpg'],
    description: 'Hydrophilic cleansing oil ROUND LAB 1025 Dokdo Cleansing Oil gently cleanses the epidermis from all types of impurities, dissolves fat plugs and even the most persistent cosmetics.',
    rating: 4.8,
    link: 'https://kaspi.kz/shop/p/round-lab-dokdo-cleansing-oil-gidrofil-noe-maslo-150-ml-105297609/?c=750000000',
    category: 'Cleansing Oil',
    likes: 0
  },
  {
    id: 13,
    name: 'Round Lab Soybean гидрофильное масло 200 мл',
    images: ['assets/products/13.jpg','assets/products/13_1.jpg', 'assets/products/13_2.jpg','assets/products/13_3.jpg'],
    description: 'A fresh and light cleansing oil that cares for skin balance and contains concentrated minerals from Ulleung do deep sea water.',
    rating: 4.7,
    link: 'https://kaspi.kz/shop/p/round-lab-soybean-gidrofil-noe-maslo-200-ml-104228736/?c=750000000',
    category: 'Cleansing Oil',
    likes: 0
  },
  {
    id: 14,
    name: 'Round Lab тонер Soybean Panthenol 250 мл',
    images: ['assets/products/14.jpg','assets/products/14_1.jpg'],
    description: 'Barrier toner Round Lab Soybean Panthenol Toner restores hydrolipid balance, strengthens protective functions, nourishes and moisturizes.',
    rating: 4.6,
    link: 'https://kaspi.kz/shop/p/round-lab-toner-soybean-panthenol-250-ml-122969114/?c=750000000',
    category: 'Toner',
    likes: 0
  },
  {
    id: 15,
    name: 'Round Lab Birch Juice Moisturizing Cleanser Pad тонер диски (пэды) для лица 80',
    images: ['assets/products/15.jpg'],
    description: 'Organic cosmetics, no dyes, no mineral oils, no fragrances, no parabens, no alcohol, hypoallergenic, no sulfates',
    rating: 4.9,
    link: 'https://kaspi.kz/shop/p/round-lab-birch-juice-moisturizing-cleanser-pad-toner-diski-pedy-dlja-litsa-80-105831669/?c=750000000',
    category: 'Toner',
    likes: 0
  },
  {
    id: 16,
    name: 'Round Lab крем 1025 Dokdo SPF50 для лица 50 мл',
    images: ['assets/products/16.jpg'],
    description: 'Moisturizing sunscreen enriched with vitamin-rich birch sap nourishes and cares for the skin, while Vita hyaluronic acid provides the necessary hydration.',
    rating: 4.9,
    link: 'https://kaspi.kz/shop/p/round-lab-solntsezaschitnyi-stik-birch-juice-moisturizing-spf50-dlja-litsa-19-g-105263761/?c=750000000',
    category: 'Sunscreen',
    likes: 0
  },
  {
    id: 17,
    name: 'Round Lab солнцезащитный стик Birch Juice Moisturizing SPF50 для лица 19 г',
    images: ['assets/products/17.jpg'],
    description: 'White birch water and Vita hyaluronic acid moisturize dry skin and protect skin from UV radiation, caring for healthy skin.',
    rating: 4.9,
    link: 'https://kaspi.kz/shop/p/round-lab-solntsezaschitnyi-stik-birch-juice-moisturizing-spf50-dlja-litsa-19-g-105263761/?c=750000000',
    category: 'Sunscreen',
    likes: 0
  },
  ];

  get filteredProducts(): ProductItem[] {
    if(this.selectedCategory === 'All'){
      return this.productItemList;
    }
    return this.productItemList.filter(p => p.category === this.selectedCategory);
  }
  

  removeProductItem(productToRemove: ProductItem){
    this.productItemList = this.productItemList.filter(p => p !== productToRemove);
  }


 
}
