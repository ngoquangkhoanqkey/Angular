import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name = 'Khoa';
  public age = 17;

  public feshfood = ['Tao', 'Cam'];
  public feshfood2 = [
    { name: 'Tao', gia: 12, sale: true },
    { name: 'Cam', gia: 10, sale: false },
    { name: 'Quyt', gia: -3200, sale: true },
    { name: 'Thom', gia: 3000, sale: false },
  ];

  public districtes: any[] = ['Quan huyen'];
  public vietnamData = [
    { city: 'Chon thanh pho', district: ['Quan huyen'] },
    {
      city: 'Dong Nai',
      district: [
        'Thành phố Long Xuyên',
        'Thành phố Châu Đốc',
        'Thị xã Tân Châu',
        'Huyện An Phú',
        'Huyện Châu Phú',
        'Huyện Châu Thành',
        'Huyện Chợ Mới',
        'Huyện Phú Tân',
        'Huyện Thoại Sơn',
        'Huyện Tịnh Biên',
        'Huyện Tri Tôn',
      ],
    },

    {
      city: 'Bà Rịa - Vũng Tàu',
      district: [
        'Thành phố Vũng Tàu',
        'Thị xã Bà Rịa',
        'Thị xã Phú Mỹ',
        'Huyện Châu Đức',
        'Huyện Côn Đảo',
        'Huyện Đất Đỏ',
        'Huyện Long Điền',
        'Huyện Tân Thành',
        'Huyện Xuyên Mộc',
      ],
    },

    {
      city: 'Bạc Liêu',
      district: [
        'Thành phố Bạc Liêu',
        'Huyện Đông Hải',
        'Huyện Giá Rai',
        'Huyện Hòa Bình',
        'Huyện Hồng Dân',
        'Huyện Phước Long',
        'Huyện Vĩnh Lợi',
      ],
    },
  ];

  constructor() {}

  public ngOnInit(): void {
    console.log('city:', this.vietnamData);
  }

  public changeCity(event: any) {
    const city = event.target.value;
    if (!city) {
      return;
    }

    // Cach 1
    // const search = this.vietnamData.filter(data => data.city === city)
    // console.log('search:', search);
    // if(search && search.length >0){
    //   this.districtes = search[0].district;
    // }

    // Cach 2
    this.districtes = this.vietnamData.find((data) => data.city === city)?.district || [];

    
  }
}
