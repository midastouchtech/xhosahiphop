// Utilities
import { INVALIDATE, SUCCESSFUL } from '@/core/constants/codes';
export function POST(req) {
  return __awaiter(this, void 0, void 0, function () {
    var body;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4 /*yield*/, req.json()];
        case 1:
          body = _a.sent();
          try {
            // Do register stuff here.
            return [
              2 /*return*/,
              new Response('Registration successfully', { status: SUCCESSFUL }),
            ];
          } catch (e) {
            console.error(e);
            return [
              2 /*return*/,
              new Response('Registration failed', { status: INVALIDATE }),
            ];
          }
          return [2 /*return*/];
      }
    });
  });
}
