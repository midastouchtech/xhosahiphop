var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Modules
import Image from 'next/image';
import Link from 'next/link';
// Components
import MainHeader from '@/core/components/header/main';
import MainFooter from '@/core/components/footer/main';
import BlogCard from '@/core/components/card/blog';
export default function BlogPage() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, (<>
			<MainHeader />

			{/* Main section [[ Find at scss/framework/section.scss ]] */}
            <div className='main-section pb-0'>
				<div className='container'>
					<div className='col-xl-6 col-lg-8 mx-auto text-center fs-5'>
						<h2>The <span className='text-primary'>Blog</span></h2>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus sit aliquid molestiae sint ab illo.</p>
						<div className='mt-4'>
							<input type='text' placeholder='Search anything here...' id='search_input' className='form-control form-control-lg'/>
						</div>
						<div className='mt-5'>
							<a className='btn btn-light-primary active m-1'>All</a>
							<a className='btn btn-light-primary m-1'>Music</a>
							<a className='btn btn-light-primary m-1'>Podcast</a>
							<a className='btn btn-light-primary m-1'>Radio</a>
							<a className='btn btn-light-primary m-1'>Trending</a>
						</div>
					</div>
				</div>
			</div>

			{/* Main section [[ Find at scss/framework/section.scss ]] */}
			<div className='main-section'>
				<div className='container'>
					{/* Cover [[ Find at scss/components/cover.scss ]] */}
					<div className='row g-4 g-lg-5 cover title-line-animation cover--round'>
						<div className='col-lg-6'>
							<div className='cover__image'>
								<Link href='/blog/1' className='ratio ratio-16x9'>
									<Image src='/images/background/horizontal/1.jpg' className='img-fluid' width={540} height={320} alt='Blog cover'/>
								</Link>
							</div>
						</div>
						<div className='col-lg-6'>
							<div className='fs-6'>
								<span className='cover__subtitle fw-medium mb-3'>Jun 20, 2022</span>
								<h3 className='mb-4'>
									<Link href='/blog/1' className='cover__title'>
										Sapiente vel sunt veritatis eaque possimus laudantium dicta repudiandae?
									</Link>
								</h3>
								<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
							</div>
							<div className='avatar avatar--lg mt-5'>
								<div className='avatar__image'>
									<Image src='/images/users/thumb.jpg' className='img-fluid' width={128} height={128} alt='User avatar'/>
								</div>
								<div className='avatar__content'>
									<span className='avatar__title'>Super admin</span>
								</div>
							</div>
						</div>
					</div>

					<div className='row g-5 mt-5'>
						<div className='col-lg-4 col-sm-6'>
							<BlogCard data={{
                        id: 2,
                        title: 'Nihil quaerat asperiores repudiandae expedita libero cupiditate.',
                        author: 'Admin',
                        date: 'Jun 20, 2022',
                        image: '/images/background/horizontal/2.jpg'
                    }}/>
						</div>
						<div className='col-lg-4 col-sm-6'>
							<BlogCard data={{
                        id: 3,
                        title: 'Doloribus repudiandae possimus. Quia dolorum voluptatum dignissimos.',
                        author: 'Admin',
                        date: 'Jun 20, 2022',
                        image: '/images/background/horizontal/3.jpg'
                    }}/>
						</div>
						<div className='col-lg-4 col-sm-6'>
							<BlogCard data={{
                        id: 4,
                        title: 'Molestias id porro incidunt aliquid dolor esse obcaecati maiores quas.',
                        author: 'Admin',
                        date: 'Jun 20, 2022',
                        image: '/images/background/horizontal/4.jpg'
                    }}/>
						</div>
						<div className='col-lg-4 col-sm-6'>
							<BlogCard data={{
                        id: 5,
                        title: 'Nihil quaerat asperiores repudiandae expedita libero cupiditate.',
                        author: 'Admin',
                        date: 'Jun 20, 2022',
                        image: '/images/background/horizontal/5.jpg'
                    }}/>
						</div>
						<div className='col-lg-4 col-sm-6'>
							<BlogCard data={{
                        id: 6,
                        title: 'Doloribus repudiandae possimus. Quia dolorum voluptatum dignissimos.',
                        author: 'Admin',
                        date: 'Jun 20, 2022',
                        image: '/images/background/horizontal/6.jpg'
                    }}/>
						</div>
						<div className='col-lg-4 col-sm-6'>
							<BlogCard data={{
                        id: 7,
                        title: 'Molestias id porro incidunt aliquid dolor esse obcaecati maiores quas.',
                        author: 'Admin',
                        date: 'Jun 20, 2022',
                        image: '/images/background/horizontal/1.jpg'
                    }}/>
						</div>
						<div className='col-lg-4 col-sm-6'>
							<BlogCard data={{
                        id: 8,
                        title: 'Nihil quaerat asperiores repudiandae expedita libero cupiditate.',
                        author: 'Admin',
                        date: 'Jun 20, 2022',
                        image: '/images/background/horizontal/2.jpg'
                    }}/>
						</div>
						<div className='col-lg-4 col-sm-6'>
							<BlogCard data={{
                        id: 9,
                        title: 'Doloribus repudiandae possimus. Quia dolorum voluptatum dignissimos.',
                        author: 'Admin',
                        date: 'Jun 20, 2022',
                        image: '/images/background/horizontal/3.jpg'
                    }}/>
						</div>
						<div className='col-lg-4 col-sm-6'>
							<BlogCard data={{
                        id: 10,
                        title: 'Molestias id porro incidunt aliquid dolor esse obcaecati maiores quas.',
                        author: 'Admin',
                        date: 'Jun 20, 2022',
                        image: '/images/background/horizontal/4.jpg'
                    }}/>
						</div>
					</div>

					<nav className='mt-5' aria-label='Blog navigation'>
						<ul className='pagination justify-content-center fw-medium'>
							<li className='page-item'>
								<a href='#' className='page-link'>Prev</a>
							</li>
							<li className='page-item'>
								<a href='#' className='page-link'>1</a>
							</li>
							<li className='page-item active'>
								<a href='#' className='page-link'>2</a>
							</li>
							<li className='page-item'>
								<a href='#' className='page-link'>3</a>
							</li>
							<li className='page-item'>
								<a href='#' className='page-link'>Next</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
			
			<MainFooter />
		</>)];
        });
    });
}
