import React, {PropTypes} from 'react';

class Banner extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          slides: [
            {
              eachSlide: 'url("https://cf.shopee.vn/file/1fb450b3672e93050f1b46542a00149e")'
            },
            {
              eachSlide: 'url("https://cf.shopee.vn/file/0d750afe1e5b4b2bf74b691c1d37d843")'
            },
            {
              eachSlide: 'url("https://cf.shopee.vn/file/8721b6668f731660bbb0a75cf2c2a6ce")'
            },
            {
              eachSlide: 'url("https://cf.shopee.vn/file/9e1353539e0735ab6f47040ac09e52b6")'
            }
          ],
          active: 0,
          show: true
      };

      this.prevOne = this.prevOne.bind(this);
      this.nextOne = this.nextOne.bind(this);
      this.mouseEnter = this.mouseEnter.bind(this);
      this.mouseLeave = this.mouseLeave.bind(this);
      this.imgChange = this.imgChange.bind(this);
      // this.nextseleOne = this.nextseleOne.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval( () => this.intervalBetweenSlides(), 3000);
  }

  componentWillUnmount() {
    clearInterval( this.interval );
  }

  intervalBetweenSlides() {

        if (this.state.active === this.state.slides.length - 1) {
          this.setState({ active: 0 });
        } else {
            this.state.active++;
        }

        this.setState({
            active: this.state.active
        });

}

  mouseEnter() {
    this.setState({show: true});
  }

  mouseLeave() {
    this.setState({show: false});
  }

  isActive(value){
      if(this.state.active === value){
          return 'active';
      }
  }

  imgChange(event) {
    const ddd = event.target.value;
    this.setState({
        active: ddd
    });
  }

  renderDots() {
    const renderdots = [];

    for (let i = 0; i < this.state.slides.length; i++) {
      renderdots.push(
        <li
          className={this.isActive(i) + ' dot'}
          key={i}
          ref="dots"
          value={i}
          onClick={this.imgChange}>
        </li>
      );
    }
    return renderdots;
  }

  prevOne(){
    const aaa = this.state.active % this.state.slides.length;
    const bbb = aaa + 3;
    if (this.state.active === 0) {
        this.setState({
            active: this.state.slides.length - 1
        });
    } else {
      this.setState({
          active: this.state.active - 1
      });
    }
  }

  nextOne(){
    const aaa = this.state.active % this.state.slides.length;
    const bbb = aaa + 1;
    if( bbb ===  this.state.slides.length ) {
      this.setState({
          active: 0
      });
    } else {
      this.setState({
          active: bbb
      });
    }
  }

  setSliderStyles(){
      const transition = this.state.active * - 786;
      return {
        width: ( this.state.slides.length * 786 ) + 'px',
        transform: 'translateX(' + transition + 'px)'
      };
  }


  imgSlides() {
    let colors = [
      "#393","#E94","#1C8","#A1D","#85FF"
    ];
    let imgNum = this.state.slides.length;
    return this.state.slides.map( (item, index) => (
        <div
          className="slide-item"
          key={index}
          style={
            { backgroundImage: item.eachSlide,
              backgroundColor: colors[index%imgNum]
            }
          }
          >{index}
        </div>
        )
      );
  }

  render() {
    return (
      <div className="mycontainer  banner ">
          <div className="test1">

            <div className="test1-1">
              <div className="banner__slider"
                onMouseEnter={this.mouseEnter}
                onMouseLeave={this.mouseLeave}>
                <div className="slider-wrapper"
                     style={this.setSliderStyles()}

                >
                  {this.imgSlides()}
                </div>
                {
                  this.state.show &&
                  <button className="pre"
                    onClick={this.prevOne}
                  >
                    <div className="pre__triangle"></div>
                  </button>
                }
                {
                  this.state.show &&
                  <button
                    className="next"
                    onClick={this.nextOne}
                  >
                    <div className="next__triangle"></div>
                  </button>
                }
                <ul className="dots">
                  {this.renderDots()}
                </ul>
                <div className="auto">auto</div>
              </div>
            </div>

            <div className="test1-2">
              <div className="test1-2-1"></div>
              <div className="test1-2-2"></div>
            </div>
          </div>
      </div>
    );
  }
}


export default Banner;
