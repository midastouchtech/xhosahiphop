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
import { RiSettingsFill } from '@remixicon/react';
// Components
import TotalUsers from './total-users';
import TotalSongs from './total-songs';
import Purchases from './purchases';
import Statistics from './statistics';
export default function AnalyticsPage() {
    return __awaiter(this, void 0, void 0, function () {
        var progressBar;
        return __generator(this, function (_a) {
            progressBar = function (label, progress, color) {
                return (<div className='progress' style={{ height: '0.25rem' }}>
                <div role='progressbar' className={'progress-bar bg-' + color} style={{ width: progress + '%' }} aria-label={label} aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}/>
            </div>);
            };
            return [2 /*return*/, (<>
            {/* Hero [[ Find at scss/framework/hero.scss ]] */}
			<div className='hero' style={{ backgroundImage: 'url(/images/banner/analytics.jpg)' }}/>
            
            {/* Under hero [[ Find at scss/framework/hero.scss ]] */}
            <div className='under-hero container'>
                {/* Section [[ Find at scss/framework/section.scss ]] */}
                <div className='section'>
                    <div className='mb-5 fs-6'>
                        <h3>Hi <span className='text-primary'>Admin</span>, Welcome to the Listen App</h3>
                        <p>Select your music to listen & download free and premium music.</p>
                    </div>
                    <div className='row g-4'>
                        <div className='col-xl-5'>
                            <div className='card bg-primary text-white'>
                                <div className='card-body fs-6'>
                                    <div className='d-flex align-items-center justify-content-between mb-2'>
                                        <h4 className='text-white mb-0'>
                                            Total Earnings
                                        </h4>
                                        <button type='button' className='btn btn-icon text-white' aria-label='Settings'>
                                            <RiSettingsFill />
                                        </button>
                                    </div>
                                    <p>Voluptatem ut, facilis ipsum, nostrum quia officia dolor mollitia temporibus hic aspernatur laborum.</p>
                                    <span className='display-4 d-block mb-3'>$126,457</span> 
                                    <button type='button' className='btn btn-warning rounded-pill'>
                                        Get Details
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-7'>
                            <div className='row h-100'>
                                <div className='col-sm-4'>
                                    <TotalUsers />
                                </div>
                                <div className='col-sm-4 mt-4 mt-sm-0'>
                                    <TotalSongs />
                                </div>
                                <div className='col-sm-4 mt-4 mt-sm-0'>
                                    <Purchases />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-8'>
                            <Statistics />
                        </div>
                        <div className='col-md-4'>
                            <div className='card h-100'>
                                <div className='card-header'>
                                    <h5 className='mb-0'>Referrals</h5>
                                </div>
                                <div className='card-body'>
                                    <ul className='list-group list-group-flush'>
                                        <li className='list-group-item border-0 px-0 py-3'>
                                            <p className='fs-4 mb-1 fw-semibold'>3421</p>
                                            <p className='mb-2 fw-medium'>Visits from Facebook</p>
                                            {progressBar('Facebook visits', 80, 'primary')}
                                        </li>
                                        <li className='list-group-item border-0 px-0 py-3'>
                                            <p className='fs-4 mb-1 fw-semibold'>2401</p>
                                            <p className='mb-2 fw-medium'>Visits from Instagram</p>
                                            {progressBar('Instagram visits', 67, 'danger')}
                                        </li>
                                        <li className='list-group-item border-0 px-0 py-3'>
                                            <p className='fs-4 mb-1 fw-semibold'>975</p>
                                            <p className='mb-2 fw-medium'>Visits from X</p>
                                            {progressBar('X visits', 31, 'info')}
                                        </li>
                                        <li className='list-group-item border-0 px-0 py-3'>
                                            <p className='fs-4 mb-1 fw-semibold'>1672</p>
                                            <p className='mb-2 fw-medium'>Visits from Affiliates</p>
                                            {progressBar('Affiliates visits', 52, 'success')}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		</>)];
        });
    });
}
