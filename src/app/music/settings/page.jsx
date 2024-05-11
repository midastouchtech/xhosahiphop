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
export default function PlanPage() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, (<>
            {/* Hero [[ Find at scss/framework/hero.scss ]] */}
			<div className='hero' style={{ backgroundImage: 'url(/images/banner/event.jpg)' }}/>
            
            {/* Under hero [[ Find at scss/framework/hero.scss ]] */}
            <div className='under-hero container'>
				{/* Section [[ Find at scss/framework/section.scss ]] */}
				<div className='section'>
					<div className='col-xl-8 col-md-11 mx-auto'>
						<div className='card'>
                            <div className='card-header'>
                                <h4 className='mb-0'>Settings</h4>
                            </div>
                            <div className='card-body pb-5'>
                                <h5 className='mb-3'>Notification</h5>
                                <div className='d-flex align-items-center justify-content-between mb-2'>
                                    <label htmlFor='email'>
										Get email notifications
									</label>
                                    <div className='switch'>
                                        <input type='checkbox' id='email'/>
                                        <label htmlFor='email'></label>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <label htmlFor='message'>
										Get message notifications
									</label>
                                    <div className='switch'>
                                        <input type='checkbox' id='message'/>
                                        <label htmlFor='message'></label>
                                    </div>
                                </div>
                                <h5 className='mt-4 mb-3'>Music Quality</h5>
                                <div className='d-flex align-items-center justify-content-between mb-2'>
                                    <label htmlFor='stream'>Streaming quality</label>
                                    <select name='stream' id='stream' className='form-select form-select-sm w-auto' style={{ minWidth: 120 }}>
                                        <option value='Very High'>Very High</option>
                                        <option value='High'>High</option>
                                        <option value='Medium'>Medium</option>
                                        <option value='Low'>Low</option>
                                    </select>
                                </div>
                                <div className='d-flex align-items-center justify-content-between mb-2'>
                                    <label htmlFor='level'>
										Adjust the volume level htmlFor your environment
									</label>
                                    <select name='level' id='level' className='form-select form-select-sm w-auto' style={{ minWidth: 120 }}>
                                        <option value='Quiet'>Quiet</option>
                                        <option value='Normal'>Normal</option>
                                        <option value='Loud'>Loud</option>
                                        <option value='Louder'>Louder</option>
                                    </select>
                                </div>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <label htmlFor='volume'>
										Same volume level htmlFor all songs
									</label>
                                    <div className='switch'>
                                        <input type='checkbox' id='volume'/>
                                        <label htmlFor='volume'></label>
                                    </div>
                                </div>
                                <h5 className='mt-4 mb-3'>History</h5>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <label>Clear your music history</label>
                                    <button type='button' className='btn btn-sm btn-primary'>
										Clear Now
									</button>
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
