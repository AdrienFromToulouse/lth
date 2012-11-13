var mongoose = require('mongoose')
, should = require('should')
, shop = require('../../schemas/shop');


var NMBROF_CITIES = 7;


describe('asiance_LTH', function(){
    describe('#getShops()', function(){
	it('should get shops without error', function(done){


	    var db = mongoose.createConnection('localhost', 'asiance_LTH');

	    var shops = shop.getShopSchema();

	    var Shop = db.model('shop',shops);
	    
	    db.once('open', function () {

		var query = Shop.find();
    		query.exec(function (err, shops) {
    		    if(err){throw err; }

		    should.exist(shops[0].cities);

		    shops[0].cities.should.lengthOf(NMBROF_CITIES);

		    shops[0].cities[0].should.have.property('name', '대구시');
		    shops[0].cities[1].should.have.property('name', '대전시');
		    shops[0].cities[2].should.have.property('name', '부산시');
		    shops[0].cities[3].should.have.property('name', '부천시');
		    shops[0].cities[4].should.have.property('name', '서울시');
		    shops[0].cities[5].should.have.property('name', '전주시');
		    shops[0].cities[6].should.have.property('name', '제주시');

		    shops[0].cities[0].shops.should.lengthOf(1);
		    shops[0].cities[1].shops.should.lengthOf(1);
		    shops[0].cities[2].shops.should.lengthOf(1);
		    shops[0].cities[3].shops.should.lengthOf(1);
		    shops[0].cities[4].shops.should.lengthOf(9);
		    shops[0].cities[5].shops.should.lengthOf(1);
		    shops[0].cities[6].shops.should.lengthOf(1);

		    /**/
		    shops[0].cities[0].shops[0].should.have.property('name', '라이브 대구');
		    shops[0].cities[1].shops[0].should.have.property('name', '라이브 대전');
		    shops[0].cities[2].shops[0].should.have.property('name', '부산광복점 라이브');
		    shops[0].cities[3].shops[0].should.have.property('name', '중동 유플렉스 라이브');

		    shops[0].cities[4].shops[0].should.have.property('name', '명동 라이브');
		    shops[0].cities[4].shops[1].should.have.property('name', '영등포롯데 라이브');
		    shops[0].cities[4].shops[2].should.have.property('name', '왕십리 엔터식스 라이브');
		    shops[0].cities[4].shops[3].should.have.property('name', '타임스퀘어 라이브');
		    shops[0].cities[4].shops[4].should.have.property('name', '무역현대 라이브');
		    shops[0].cities[4].shops[5].should.have.property('name', '라이브 디큐브');
		    shops[0].cities[4].shops[6].should.have.property('name', '라이브 홍대');
		    shops[0].cities[4].shops[7].should.have.property('name', '라코스테 가로수길(멀티샾)');
		    shops[0].cities[4].shops[8].should.have.property('name', '여의도 IFC몰(멀티샵)');

		    shops[0].cities[5].shops[0].should.have.property('name', '라이브 전주');
		    shops[0].cities[6].shops[0].should.have.property('name', '라이브 제주');

		    /**/
		    shops[0].cities[0].shops[0].should.have.property('latitude', 35.86741934017295);
		    shops[0].cities[1].shops[0].should.have.property('latitude', 36.32932551789929);
		    shops[0].cities[2].shops[0].should.have.property('latitude', 35.09915995340438);
		    shops[0].cities[3].shops[0].should.have.property('latitude', 37.504225729697275);

		    shops[0].cities[4].shops[0].should.have.property('latitude', 37.56260725815746);
		    shops[0].cities[4].shops[1].should.have.property('latitude', 37.51540530491637);
		    shops[0].cities[4].shops[2].should.have.property('latitude', 37.561527164085206);
		    shops[0].cities[4].shops[3].should.have.property('latitude', 37.51696091697719);
		    shops[0].cities[4].shops[4].should.have.property('latitude', 37.50839954290128);
		    shops[0].cities[4].shops[5].should.have.property('latitude', 37.50859018453681);
		    shops[0].cities[4].shops[6].should.have.property('latitude', 37.55387250545642);
		    shops[0].cities[4].shops[7].should.have.property('latitude', 37.5211101918867);
		    shops[0].cities[4].shops[8].should.have.property('latitude', 37.52562681861596);

		    shops[0].cities[5].shops[0].should.have.property('latitude', 35.821412725780135);
		    shops[0].cities[6].shops[0].should.have.property('latitude', 33.51474918720605);

		    /**/
		    shops[0].cities[0].shops[0].should.have.property('longitude', 128.59544396018063);
		    shops[0].cities[1].shops[0].should.have.property('longitude', 127.42873502583919);
		    shops[0].cities[2].shops[0].should.have.property('longitude', 129.03103866574043);
		    shops[0].cities[3].shops[0].should.have.property('longitude', 126.76203446509996);

		    shops[0].cities[4].shops[0].should.have.property('longitude', 126.98461748242191);
		    shops[0].cities[4].shops[1].should.have.property('longitude', 126.90774980621485);
		    shops[0].cities[4].shops[2].should.have.property('longitude', 127.037408496219);
		    shops[0].cities[4].shops[3].should.have.property('longitude', 126.90322056927874);
		    shops[0].cities[4].shops[4].should.have.property('longitude', 127.05979931149508);
		    shops[0].cities[4].shops[5].should.have.property('longitude', 126.888827777347);
		    shops[0].cities[4].shops[6].should.have.property('longitude', 126.92276192108154);
		    shops[0].cities[4].shops[7].should.have.property('longitude', 127.02297997871399);
		    shops[0].cities[4].shops[8].should.have.property('longitude', 126.92564679272459);

		    shops[0].cities[5].shops[0].should.have.property('longitude', 127.14517955332641);
		    shops[0].cities[6].shops[0].should.have.property('longitude', 126.52564659525753);

		    done();
		    mongoose.disconnect();
    		});
	    });
	})
    })
})




