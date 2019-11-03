'use strict'

/**
 * TTTTTTTTTTTTTTTTTTTTTTTHHHHHHHHH     HHHHHHHHHEEEEEEEEEEEEEEEEEEEEEE
 * T:::::::::::::::::::::TH:::::::H     H:::::::HE::::::::::::::::::::E
 * T:::::::::::::::::::::TH:::::::H     H:::::::HE::::::::::::::::::::E
 * T:::::TT:::::::TT:::::THH::::::H     H::::::HHEE::::::EEEEEEEEE::::E
 * TTTTTT  T:::::T  TTTTTT  H:::::H     H:::::H    E:::::E       EEEEEE
 *         T:::::T          H:::::H     H:::::H    E:::::E
 *         T:::::T          H::::::HHHHH::::::H    E::::::EEEEEEEEEE
 *         T:::::T          H:::::::::::::::::H    E:::::::::::::::E
 *         T:::::T          H:::::::::::::::::H    E:::::::::::::::E
 *         T:::::T          H::::::HHHHH::::::H    E::::::EEEEEEEEEE
 *         T:::::T          H:::::H     H:::::H    E:::::E
 *         T:::::T          H:::::H     H:::::H    E:::::E       EEEEEE
 *       TT:::::::TT      HH::::::H     H::::::HHEE::::::EEEEEEEE:::::E
 *       T:::::::::T      H:::::::H     H:::::::HE::::::::::::::::::::E
 *       T:::::::::T      H:::::::H     H:::::::HE::::::::::::::::::::E
 *       TTTTTTTTTTT      HHHHHHHHH     HHHHHHHHHEEEEEEEEEEEEEEEEEEEEEE
 *
 *    SSSSSSSSSSSSSSS UUUUUUUU     UUUUUUUUPPPPPPPPPPPPPPPPP   EEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRR
 *  SS:::::::::::::::SU::::::U     U::::::UP::::::::::::::::P  E::::::::::::::::::::ER::::::::::::::::R
 * S:::::SSSSSS::::::SU::::::U     U::::::UP::::::PPPPPP:::::P E::::::::::::::::::::ER::::::RRRRRR:::::R
 * S:::::S     SSSSSSSUU:::::U     U:::::UUPP:::::P     P:::::PEE::::::EEEEEEEEE::::ERR:::::R     R:::::R
 * S:::::S             U:::::U     U:::::U   P::::P     P:::::P  E:::::E       EEEEEE  R::::R     R:::::R
 * S:::::S             U:::::U     U:::::U   P::::P     P:::::P  E:::::E               R::::R     R:::::R
 *  S::::SSSS          U:::::U     U:::::U   P::::PPPPPP:::::P   E::::::EEEEEEEEEE     R::::RRRRRR:::::R
 *   SS::::::SSSSS     U:::::U     U:::::U   P:::::::::::::PP    E:::::::::::::::E     R:::::::::::::RR
 *     SSS::::::::SS   U:::::U     U:::::U   P::::PPPPPPPPP      E:::::::::::::::E     R::::RRRRRR:::::R
 *        SSSSSS::::S  U:::::U     U:::::U   P::::P              E::::::EEEEEEEEEE     R::::R     R:::::R
 *             S:::::S U:::::U     U:::::U   P::::P              E:::::E               R::::R     R:::::R
 *             S:::::S U::::::U   U::::::U   P::::P              E:::::E       EEEEEE  R::::R     R:::::R
 * SSSSSSS     S:::::S U:::::::UUU:::::::U PP::::::PP          EE::::::EEEEEEEE:::::ERR:::::R     R:::::R
 * S::::::SSSSSS:::::S  UU:::::::::::::UU  P::::::::P          E::::::::::::::::::::ER::::::R     R:::::R
 * S:::::::::::::::SS     UU:::::::::UU    P::::::::P          E::::::::::::::::::::ER::::::R     R:::::R
 *  SSSSSSSSSSSSSSS         UUUUUUUUU      PPPPPPPPPP          EEEEEEEEEEEEEEEEEEEEEERRRRRRRR     RRRRRRR
 *
 * TTTTTTTTTTTTTTTTTTTTTTTIIIIIIIIIINNNNNNNN        NNNNNNNNYYYYYYY       YYYYYYY
 * T:::::::::::::::::::::TI::::::::IN:::::::N       N::::::NY:::::Y       Y:::::Y
 * T:::::::::::::::::::::TI::::::::IN::::::::N      N::::::NY:::::Y       Y:::::Y
 * T:::::TT:::::::TT:::::TII::::::IIN:::::::::N     N::::::NY::::::Y     Y::::::Y
 * TTTTTT  T:::::T  TTTTTT  I::::I  N::::::::::N    N::::::NYYY:::::Y   Y:::::YYY
 *         T:::::T          I::::I  N:::::::::::N   N::::::N   Y:::::Y Y:::::Y
 *         T:::::T          I::::I  N:::::::N::::N  N::::::N    Y:::::Y:::::Y
 *         T:::::T          I::::I  N::::::N N::::N N::::::N     Y:::::::::Y
 *         T:::::T          I::::I  N::::::N  N::::N:::::::N      Y:::::::Y
 *         T:::::T          I::::I  N::::::N   N:::::::::::N       Y:::::Y
 *         T:::::T          I::::I  N::::::N    N::::::::::N       Y:::::Y
 *         T:::::T          I::::I  N::::::N     N:::::::::N       Y:::::Y
 *       TT:::::::TT      II::::::IIN::::::N      N::::::::N       Y:::::Y
 *       T:::::::::T      I::::::::IN::::::N       N:::::::N    YYYY:::::YYYY
 *       T:::::::::T      I::::::::IN::::::N        N::::::N    Y:::::::::::Y
 *       TTTTTTTTTTT      IIIIIIIIIINNNNNNNN         NNNNNNN    YYYYYYYYYYYYY
 *
 *         CCCCCCCCCCCCC     OOOOOOOOO     MMMMMMMM               MMMMMMMMPPPPPPPPPPPPPPPPP   IIIIIIIIIILLLLLLLLLLL             EEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRR
 *      CCC::::::::::::C   OO:::::::::OO   M:::::::M             M:::::::MP::::::::::::::::P  I::::::::IL:::::::::L             E::::::::::::::::::::ER::::::::::::::::R
 *    CC:::::::::::::::C OO:::::::::::::OO M::::::::M           M::::::::MP::::::PPPPPP:::::P I::::::::IL:::::::::L             E::::::::::::::::::::ER::::::RRRRRR:::::R
 *   C:::::CCCCCCCC::::CO:::::::OOO:::::::OM:::::::::M         M:::::::::MPP:::::P     P:::::PII::::::IILL:::::::LL             EE::::::EEEEEEEEE::::ERR:::::R     R:::::R
 *  C:::::C       CCCCCCO::::::O   O::::::OM::::::::::M       M::::::::::M  P::::P     P:::::P  I::::I    L:::::L                 E:::::E       EEEEEE  R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM:::::::::::M     M:::::::::::M  P::::P     P:::::P  I::::I    L:::::L                 E:::::E               R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM:::::::M::::M   M::::M:::::::M  P::::PPPPPP:::::P   I::::I    L:::::L                 E::::::EEEEEEEEEE     R::::RRRRRR:::::R
 * C:::::C              O:::::O     O:::::OM::::::M M::::M M::::M M::::::M  P:::::::::::::PP    I::::I    L:::::L                 E:::::::::::::::E     R:::::::::::::RR
 * C:::::C              O:::::O     O:::::OM::::::M  M::::M::::M  M::::::M  P::::PPPPPPPPP      I::::I    L:::::L                 E:::::::::::::::E     R::::RRRRRR:::::R
 * C:::::C              O:::::O     O:::::OM::::::M   M:::::::M   M::::::M  P::::P              I::::I    L:::::L                 E::::::EEEEEEEEEE     R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM::::::M    M:::::M    M::::::M  P::::P              I::::I    L:::::L                 E:::::E               R::::R     R:::::R
 *  C:::::C       CCCCCCO::::::O   O::::::OM::::::M     MMMMM     M::::::M  P::::P              I::::I    L:::::L         LLLLLL  E:::::E       EEEEEE  R::::R     R:::::R
 *   C:::::CCCCCCCC::::CO:::::::OOO:::::::OM::::::M               M::::::MPP::::::PP          II::::::IILL:::::::LLLLLLLLL:::::LEE::::::EEEEEEEE:::::ERR:::::R     R:::::R
 *    CC:::::::::::::::C OO:::::::::::::OO M::::::M               M::::::MP::::::::P          I::::::::IL::::::::::::::::::::::LE::::::::::::::::::::ER::::::R     R:::::R
 *      CCC::::::::::::C   OO:::::::::OO   M::::::M               M::::::MP::::::::P          I::::::::IL::::::::::::::::::::::LE::::::::::::::::::::ER::::::R     R:::::R
 *         CCCCCCCCCCCCC     OOOOOOOOO     MMMMMMMM               MMMMMMMMPPPPPPPPPP          IIIIIIIIIILLLLLLLLLLLLLLLLLLLLLLLLEEEEEEEEEEEEEEEEEEEEEERRRRRRRR     RRRRRRR
 *
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 */

/**
 * 오늘 우리는 컴파일러를 만들어 볼꺼에요. 평범한 컴파일러는 아니구요...
 * 진짜 X나 작고 귀여운 컴파일러에요. 이 조그만 컴파일러는 이 주석을 싹 없앤다면 200줄 남짓한 아주 작은 코드에요.
 *
 * 우리는 lisp(교육용 언어)로 쓰여진 함수를 C언어 함수로 컴파일 할거에요.
 *
 * 만약 두 언어에 대해서 잘 모를수도 있기 때문에, 간단히 설명드려요.
 *
 * 만약 우리가 `add`와 `substract`함수를 만든다면 다음과 같이 쓰일 거에요.
 *
 *                  LISP                      C
 *
 *   2 + 2          (add 2 2)                 add(2, 2)
 *   4 - 2          (subtract 4 2)            subtract(4, 2)
 *   2 + (4 - 2)    (add 2 (subtract 4 2))    add(2, subtract(4, 2))
 *
 * 개 쉽쥬?
 *
 * 이런식의 예제를 우리는 컴파일 하게 될거에요. 이것들은 정확히 말해서는... 완전한 C와 LISP 문법은 아니지만,
 * 많은 현대적인 컴파일러들이 작동되는지에 대해 이해하기 위해선 충분한 예제일 거에요.
 *
 * 대부분의 컴파일러들은 세 가지 단계를 거쳐요 : Parsing(파싱), Transformation(변형),
 * and Code Generation(코드 생성)
 *
 * 1. *Parsing* 은 raw code(타겟이 될 코드)를 가져와서, 더 추상적인 코드 표현으로 바꿔요.
 *
 * 2. *Transformation* 은 추상적 표현을 가져와서 컴파일러가 원하는 표현대로 조작하게 됩니다.
 *
 * 3. *Code Generation* 변경된 코드 표현을 가져와서, 새로운 코드로 만들어요.
 *
 * */

/**
 * Parsing
 * -------
 *
 * Parsing은 전형적으로 두 가지 단계를 거쳐요 : Lexical Analysis(어휘 분석) and
 * Syntactic Analysis(구문 분석).
 *
 * 네이버 사전 의미
 * 어휘 :
 *  1. 어떤 일정한 범위 안에서 쓰이는 단어의 수효. 또는 단어의 전체. 2. 어떤 종류의 말을 간단한 설명을 붙여 순서대로 모아 적어 놓은 글.
 * 구문 :
 * 1. 문장의 구성 2. 컴퓨터에서, 원시 언어의 문장을 올바르게 구성하기 위한 규칙. 자연어의 문법에 해당한다.
 *
 * *Lexical Analysis* 는 raw code를 가져와서 tokenizer 혹은 lexer라고 불리는 것으로 이 코드들을 token이라는 것으로 분리해요.
 *
 * token들은 문법의 고립된 부분을 묘사하는 아주 작은 오브젝트들의 배열이에요. 이것들은 numbers, labels, punctuation, operators,
 * 어떤 것이든 될 수 있어요. (유효한 단어들로 자르는 행위)
 *
 * *Syntactic Analysis*은 토큰들을 가져와서, 구문의 각 부분과 토큰간의 관계를 설명하는 표현으로 재구성 합니다. (단어들이 문장과 어떤 관계를 가지는지 재구성)
 * 이것은 intermediate representation(중간 표현) 혹은 Abstract Syntax Tree(추상 구문 트리) 라고 합니다.
 *
 * Abstract Syntax Tree, 혹은 줄여서 AST는 작업하기 쉽게 하고, 많은 정보를 알려주는 방식을 이용해 코드를 나타낸 매우 깊고 중첩된 객체에요.
 *
 * 다음 syntax를 보시죠! :
 *
 *   (add 2 (subtract 4 2))
 *
 * Token들은 다음과 같이 보여질 거에요:
 *
 *   [
 *     { type: 'paren',  value: '('        },
 *     { type: 'name',   value: 'add'      },
 *     { type: 'number', value: '2'        },
 *     { type: 'paren',  value: '('        },
 *     { type: 'name',   value: 'subtract' },
 *     { type: 'number', value: '4'        },
 *     { type: 'number', value: '2'        },
 *     { type: 'paren',  value: ')'        },
 *     { type: 'paren',  value: ')'        },
 *   ]
 * `paren은 소괄호라는 뜻`
 *
 * 그리고 AST는 다음과 같이 보여질 것이구요.:
 *
 *   {
 *     type: 'Program',
 *     body: [{
 *       type: 'CallExpression',
 *       name: 'add',
 *       params: [{
 *         type: 'NumberLiteral',
 *         value: '2',
 *       }, {
 *         type: 'CallExpression',
 *         name: 'subtract',
 *         params: [{
 *           type: 'NumberLiteral',
 *           value: '4',
 *         }, {
 *           type: 'NumberLiteral',
 *           value: '2',
 *         }]
 *       }]
 *     }]
 *   }
 *
 *
 */

/**
 * Transformation
 * --------------
 *
 * 컴파일러의 다음 단계는 transformation이에요. 다시 한번 말씀드리지만,
 * 이것은 단지 이전의 마지막 단계에서 AST를 가져와서 이것을 변경시키는 작업이에요.
 * 같은 언어의 AST로 혹은 그것은 완전히 새로운 언어로도 번역될 수 있습니다!
 *
 * 어떻게 AST가 변화할지 보도록 하죠.
 *
 * 여러분은 우리의 AST가 매우 비슷한 요소들을 가지고 있음을 눈치 챘을지도 모르겠네요.
 * Type 속성을 가진 객체들이 있어요(위의 AST에서 찾아보세요!).  이들은 각각 AST Node라고 불러요.
 * 이 node들은 tree의 고립된 한 부분을 설명하는 속성을 정의 했어요.
 *
 * 우리는 `NumberLiteral` 라는 노드를 가질 수 있어요.:
 *
 *   {
 *     type: 'NumberLiteral',
 *     value: '2',
 *   }
 *
 * 혹은 어쩌면 `CallExpression`도 가질 수 있겠죠?:
 *
 *   {
 *     type: 'CallExpression',
 *     name: 'subtract',
 *     params: [...nested nodes go here...],
 *   }
 *
 * AST를 변경할 때, 우리는 속성들을 더하고/없애고/바꾸는 것으로 nodes를 조작할 수 있습니다.
 * 새 노드를 추가하거나, 노드를 제거하거나, 기존 AST를 그대로 두고 이를 기반으로 완전히 새로운 노드를 만들 수도 있습니다.
 *
 * 우리는 새로운 언어를 목표(Lisp->C)로하기 때문에, 목표 언어에 맞는 완전히 새로운 AST를 만드는 데 중점을 둘 것입니다.
 *
 * Traversal(순회)
 * ---------
 *
 * 이 node들을 모두 탐색하기 위해선, 우리는 그들을 Traversal할 수 있어야 해요. 이 순회 방법은 AST에 깊이 우선(깊게 들어 갈 수 있을 만큼)으로
 * 각각의 노드들로 이동해요.
 *
 *  *   {
 *     type: 'Program',
 *     body: [{
 *       type: 'CallExpression',
 *       name: 'add',
 *       params: [{
 *         type: 'NumberLiteral',
 *         value: '2'
 *       }, {
 *         type: 'CallExpression',
 *         name: 'subtract',
 *         params: [{
 *           type: 'NumberLiteral',
 *           value: '4'
 *         }, {
 *           type: 'NumberLiteral',
 *           value: '2'
 *         }]
 *       }]
 *     }]
 *   }
 *
 * 위의 AST로부터 우리는 이동할거에요.
 *
 *  1. Program - AST의 최상위에서 시작
 *  2. CallExpression (add) - Program의 body의 첫 번째 요소로 이동
 *  3. NumberLiteral (2) - CallExpression의 파라미터들 중 첫 번째 요소로 이동.
 *  4. CallExpression (subtract) - CallExpression의 파라미터들 중 두 번째 요소로 이동.
 *  5. NumberLiteral (4) - CallExpression의 파라미터들 중 첫 번째 요소로 이동.
 *  6. NumberLiteral (2) - CallExpression의 파라미터들 중 두 번째 요소로 이동.
 *
 * 만약 우리가 분리된 AST를 생성하는 대신에 AST를 직접적으로 다루고 있었다면, 우리는 여기서 모든 종류의 추상화를
 * 여기서 소개할 것이였습니다. 하지만 지금 트리의 각각의 노드에 방문하는 것만으로도 우리가 시도하려는 것에 충분합니다.
 *
 * 제가 "visiting" 이라는 단어를 사용한 이유는 객체 구조의 요소들에 대한 작동을 나타내는 방법에 대한 패턴이 있기 때문입니다.
 *
 *  * Visitors
 *    --------
 *
 * 여기서 기본 아이디어는 우리가 다른 노드 타입들을 허용하는 메소드들을 가지는 "visitor" 객체를 작성할 것이라는 점입니다.
 *
 *   var visitor = {
 *     NumberLiteral() {},
 *     CallExpression() {},
 *   };
 *
 * 우리가 AST를 순회 할 때, 우리는 우리가 타입이 일치하는 노드를 "enter(입력)" 할때 마다 visitor의 메소드들을 부를 것입니다.
 *
 * 우리가 이것을 유용하게 만들기 위해서 노드와 부모 노드에 대한 참조 또한 전달 할 것입니다.
 *
 *   var visitor = {
 *     NumberLiteral(node, parent) {},
 *     CallExpression(node, parent) {},
 *   };
 *
 * 하지만, "exit"에 대한 호출의 가능성도 존재합니다. 이전에 우리 트리 구조를 리스트 형식으로 상상해보세요.
 *
 *  *   - Program
 *     - CallExpression
 *       - NumberLiteral
 *       - CallExpression
 *         - NumberLiteral
 *         - NumberLiteral
 *
 * 우리가 아래로 순회하기 때문에, 우리는 branch(분기)들의 막다른 끝에 도달 할 것입니다.
 * 우리가 각각의 브랜치를 끝내면, 우리는 "exit" 합니다. 그래서 우리는 각각의 노드를 "enter"해서 트리 아래로 내려가고
 * "exit"해서 나올 것입니다.
 *
 *   -> Program (enter)
 *     -> CallExpression (enter)
 *       -> Number Literal (enter)
 *       <- Number Literal (exit)
 *       -> Call Expression (enter)
 *          -> Number Literal (enter)
 *          <- Number Literal (exit)
 *          -> Number Literal (enter)
 *          <- Number Literal (exit)
 *       <- CallExpression (exit)
 *     <- CallExpression (exit)
 *   <- Program (exit)
 *
 * 이를 지원하기 위해 "visitor"의 최종 형태는 다음과 같습니다.
 *
 *   var visitor = {
 *     NumberLiteral: {
 *       enter(node, parent) {},
 *       exit(node, parent) {},
 *     }
 *   };
 *
 * Code Generation(코드 생성)
 * ---------------
 *
 * 컴파일러의 마지막 단계는 code Generation입니다. 때때로 컴파일러들은 transformation과 겹쳐 작동하기도 하지만,
 * 대부분의 Code Generation은 우리의 AST를 가져와서 string-ify 코드로 다시 만드는 것입니다.
 *
 * Code generator는 여러가지 다른 방법들로 작동하는데, 몇몇 컴파일러들은 이전의 토큰들을 재사용 하기도 하고,
 * 다른 것들은 별도의 코드 표현을 만들어서, 노드를 선형으로 출력 할 수 있게 합니다만, 제가 아는 바로는 이런 것이 있다는 거고,
 * 지금은 우리가 방금 만든 것과 동일한 AST를 사용 할 것이며, 이것에 우리는 집중할 것입니다.
 *
 * 효과적인 우리의 code generator는 어떻게 모든 다른 AST 노드 타입들을 "print(출력)"할 것인지 알 것입니다.
 * 그리고 이것은 깊은 노드들을 출력하기 위해 모든것이 하나의 긴 문자열 코드로 출력 될 때까지 재귀적으로 이것 스스로 호출할 것입니다.
 */

/**
 * 이게 다에요. 이게 컴파일러들의 모든 조각들이에요.
 *
 * 이제부터 제가 여기서 설명하는 것처럼 모든 컴파일러들이 똑같이 동작하지는 않아요.
 * 컴파일러들은 몇가지 다른 목적들을 가지고 있고, 그들은 제가 설명한 것보다도 더 많은 단계를 필요 할지도 몰라요.
 *
 * 그러나 지금 여러분은 대부분의 컴파일러들이 어떻게 생겼는지에 대한 일반적인 고차원의 아이디어들을 가져야 할 것이에요.
 *
 * 지금까지 저는 이 모든것들을 설명했고, 이제 여러분만의 컴파일러를 만들러 가면 좋을 거 같아요!
 *
 * 농담이구요 ㅋㅋ, 제가 여러분을 도와 드릴꺼에요 :p
 *
 * 자 그럼 시작합시다...
 *
 */

/**
 * ============================================================================
 *                                   (/^▽^)/
 *                                THE TOKENIZER!
 * ============================================================================
 */

/**
 * 우리는 tokenizer를 이용한 parsing, lexical analysis의 첫번 째 단계를 시작할 거에요.
 *
 * 우리는 우리의 문자열 코드를 가져올 것이구요, 그것들을 token들의 배열로 분해할 것이에요.
 *
 *    (add 2 (subtract 4 2))   =>   [{ type: 'paren', value: '(' }, ...]
 */

// 우리는 입력 문자열 코드를 받아드리는 것으로부터 시작하고, 두 가지 설정을 하겠습니다.
function tokenizer(input) {
  //우리 코드의 위치를 추적하기 위한 `current` 변수는 커서와 같습니다.
  let current = 0

  // 그리고 우리의 token들을 담을 배열이에요.
  let tokens = []
  // 우리는 우리가 루프에 `inside(들어감)`을 원하는 만큼 하여 `current`변수가 증가되도록 설정하는
  // `while` 루프를 만드는 것으로부터 시작합니다.
  //
  // 우리는 우리가 우리의 토큰의 길이가 어느정도인지 알 수 없고, 단일 loop 내에서
  //`current`를 여러번 증가 시키는걸 원할지도 모르기 때문에 이 작업을 합니다.
  while (current < input.length) {
    // 우리는 또한 `input`안에 `current`의 문자를 저장 할 것입니다.
    let char = input[current]

    // 우리가 첫번째로 체크하고 싶은 것은 열린 소괄호 입니다.
    // 이것은 이것은 나중에 `CallExpression`를 위해 사용될 것이지만, 지금은 오직 문자로만
    // 취급할 것입니다.

    // 만약 열린 괄호가 있다면 체크합니다.
    if (char === '(') {
      // 만약 그렇다면, 우리는 `paren`타입의 새로운 토큰을 push 하고 value에 열린 괄호를 세팅
      // 할 것입니다.
      tokens.push({
        type: 'paren',
        value: '(',
      })

      // 그리고 `current`를 증가합니다.
      current++

      // 그리고 우리는 다음 순회를 루프를 `continue` 합니다.
      continue
    }

    // 다음으로 닫힌 괄호를 체크할 거에요. 우리는 이전과 정확히 같은 것을 할 거에요:
    // 닫힌 괄호를 체크하고, 토큰을 추가하고, `current`를 증가시키고, `continue`를 함.
    if (char === ')') {
      tokens.push({
        type: 'paren',
        value: ')',
      })
      current++
      continue
    }

    // 넘어가서, 우리는 공백을 체크 할거에요. 이것은 꽤 재미있는데, 우리는 문자들을 분리하기
    // 위해 존재하는 공백들을 사용하기 때문이에요. 그러나 그것은 토큰처럼 저장되는 우리를 위한
    // 중요한 것은 사실 아니에요. 우리는 이것을 나중에 버릴 거에요.
    //
    // 여기서 존재하는지를 위한 테스트를 할것이고, 만약 존재한다면, 우리는 단지 `continue`만 하게 될 것이에요.
    let WHITESPACE = /\s/
    if (WHITESPACE.test(char)) {
      current++
      continue
    }

    //다음 토큰의 타입은 number입니다. 이것ㄷ은 우리가 이전에 봐왔던거랑 좀 달라요. 왜냐면
    // number타입은 문자들의 어떤 숫자도 number타입일 수 있고, 우리는 하나의 토큰처럼 문자들의 전체 문자 나열들을 캡쳐하길 원해요.
    //   (add 123 456)
    //        ^^^ ^^^
    //       두개로 나뉘어진 토큰들
    //
    // 그래서 우리는 문자 나열에서 첫번째 숫자를 만날때, 이 작업이 시작될 것입니다.
    let NUMBERS = /[0-9]/
    if (NUMBERS.test(char)) {
      // 우리는 우리가 push할 `value`문자열을 를 만들거에요.
      let value = ''

      // 우리는 우리가 number가 아닌 문자를 만나기 전까지 문자 나열 속에 각각 문자들에
      // 루프를 돌 것이고, `current`를 증가하고, 각각의 `value`에 숫자인 문자들을 `push`할 것입니다.
      while (NUMBERS.test(char)) {
        value += char
        char = input[++current]
      }

      // 이후에 우리는 `number`토큰을 `tokens`배열에 push할 것입니다.
      tokens.push({ type: 'number', value })

      //그리고 continue합니다.
      continue
    }

    // 우리는 또한 우리 언어에서 쌍따옴표로 둘러쌓인 text가 될 문자열들을 지원 할 것입니다.
    //   (concat "foo" "bar")
    //            ^^^   ^^^ string tokens
    //
    // 우리는 열린 따옴표를 체크하는 것부터 시작 할 것입니다.
    if (char === '"') {
      // 우리의 string 토큰을 위해서 `value` 변수를 유지하세요.
      let value = ''

      // 우리는 우리 토큰에서 열린 쌍따옴표는 지나칠 것입니다.
      char = input[++current]

      // 그런 후에 우리는 다른 쌍따옴표에 도착하기 전까지 각각의 문자들을 계속 반복할 것입니다.
      while (char !== '"') {
        value += char
        char = input[++current]
      }

      // 닫힌 쌍따옴표 역시 무시합니다.
      char = input[++current]

      // 그리고 우리의 `string` 토큰을 `tokens`배열에 추가합니다.
      tokens.push({ type: 'string', value })

      continue
    }

    // 마지막 타입은 `name`토큰일 거에요. 이것은 숫자들 대신에 문자 순서이고,
    // 이것들은 lisp 문법에서의 함수명이에요.
    //
    //   (add 2 4)
    //    ^^^
    //    Name 토큰
    //
    let LETTERS = /[a-z]/i
    if (LETTERS.test(char)) {
      let value = ''

      // Again we're just going to loop through all the letters pushing them to
      // 우리는 다시 한번 value에 push할 모든 문자들을 루프 할 거에요.
      // a value.
      while (LETTERS.test(char)) {
        value += char
        char = input[++current]
      }

      // 그리고 타입 'name'과 함께 토큰처럼 value를 push하고, continue할 거에요.
      tokens.push({ type: 'name', value })

      continue
    }

    // 마지막으로 만약 현재로부터 문자가 매치 되지 않는다면, 우리는 에러를 던지고 완전히 종료할 거에요.
    throw new TypeError('I dont know what this character is: ' + char)
  }

  // 우리의 `tokenizer`가 끝난 후에 우리는 간단히 tokens배열을 리턴합니다!
  return tokens
}

/**
 * ============================================================================
 *                                 ヽ/❀o ل͜ o\ﾉ
 *                                THE PARSER!!!
 * ============================================================================
 */

/**
 * 우리의 parser를 위해(통해) 우리는 tokens 배열을 가지고 와서, AST로 바꿀 것입니다.
 *
 *   [{ type: 'paren', value: '(' }, ...]   =>   { type: 'Program', body: [...] }
 */

// 좋아연..., 그래서 우리는 우리의 tokens 배열을 담을 `parser` 함수를 정의 합니다.
function parser(tokens) {
  // 다시한번 우리는 커서 역할을 할 `current`변수를 불러요.
  let current = 0

  // 그러나 이번에는 우리는 `while` 루프 대신에 recursion(재귀)를 사용할 것이에요.
  // 그래서 우리는 `walk` 함수를 선언합니다.
  function walk() {
    // walk 함수안에서 우리는 `current` (현재)토큰을 가지는 것부터 시작할것입니다.
    let token = tokens[current]

    // 우리는 다른 코드 경로인 토큰의 각 타입을 분리 하고 `number` 토큰과 함께 시작 될 것입니다.
    //
    // 우리는 `number`토큰이 있는지 테스트 합니다.
    if (token.type === 'number') {
      // 만약 우리가 가지고 있다면 `current`를 증가 시키고
      current++

      // 그리고 우리는 `NumberLiteral`이라고 불리우는 새로운 AST node를 리턴 하고, 우리의 토큰 value를
      // 이것의 value에 세팅할 것입니다.
      return {
        type: 'NumberLiteral',
        value: token.value,
      }
    }

    // 'string'토큰 역시 'number'처럼 `StringLiteral` 노드를 생성합니다.
    if (token.type === 'string') {
      current++

      return {
        type: 'StringLiteral',
        value: token.value,
      }
    }

    // 다음에 우리는 CallExpressions를 찾습니다. 우리는 우리가 열린 소괄호를 만났을 때,
    // 이것을 시작 할 거에요.
    if (token.type === 'paren' && token.value === '(') {
      // 우리는 우리의 AST가 다루지 않을 소괄호를 지나치기 위해 'current'를
      // 증가시킬 거에요.
      token = tokens[++current]

      // 우리는 `CallExpression`과 함께 기초 node를 만들어요, 그리고 열린 소과호 다음 토큰이
      // 함수의 'name'이기 때문에 name에 현재 토큰의 값으로 세팅 할 거에요.
      let node = {
        type: 'CallExpression',
        name: token.value,
        params: [],
      }

      // 우리는 name 토큰을 생략하기 위해 `current`를 *다시* 증가 시켜요.
      token = tokens[++current]

      // 그리고 지금 우리는 우리가 닫힌 소괄호를 만날 때까지 우리의 `CallExpression`
      // 의 `params(인자들)`이 될 각각의 토큰들을 loop하길 원해요.
      //
      // 지금 우리는 recursion(재귀)에 들어갈 거에요. 잠재적인 무한의 깊은 node들의 set을
      // parse(문장 분석)하기 위한 시도 대신에, 우리는 이 문제를 해결하기 위해 recursion에 의존 할 거에요.
      //
      // 이것을 설명하기 위해, Lisp 코드를 가져왔어요. 우리는 그것들 자신의 number들을 포함하는 중첩된 `CallExpression`와
      // 그냥 number인 `add`의 인자들을 볼수 있어요.
      //
      //   (add 2 (subtract 4 2))
      //
      // 여러분은 또한 우리가 여러개의 닫힘 소괄호를 가지고 있는 tokens 배열에 주목할
      // 것입니다.
      //
      //   [
      //     { type: 'paren',  value: '('        },
      //     { type: 'name',   value: 'add'      },
      //     { type: 'number', value: '2'        },
      //     { type: 'paren',  value: '('        },
      //     { type: 'name',   value: 'subtract' },
      //     { type: 'number', value: '4'        },
      //     { type: 'number', value: '2'        },
      //     { type: 'paren',  value: ')'        }, <<< Closing parenthesis
      //     { type: 'paren',  value: ')'        }, <<< Closing parenthesis
      //   ]
      //
      // 우리는 중첩된 `walk` 함수에 의존하여 지나간 중첩된 `CallExpression` 의 `current`
      // 변수를 증가시킬 것입니다.

      // 그래서 우리는 `paren`의 `type` 토큰과 닫힘 소괄호 `value`을 만날때까지
      // 계속하는 `while`루프를 만들 것입니다.
      while (token.type !== 'paren' || (token.type === 'paren' && token.value !== ')')) {
        // 우리는 `node`를 리턴하는 `walk` 함수를 부르고, 우리의 node.params에
        //그것을 push할 것입니다.
        node.params.push(walk())
        token = tokens[current]
      }

      // 마지막으로 마지막에 있는 닫힌 소괄호를 생략하기 위해 `current`를 증가시킬
      // 것입니다.
      current++

      // 그리고 node를 리턴합니다.
      return node
    }

    // 다시 한번, 만약 토큰 타입을 이해하지 못한다면 에러를 던져 줄 것입니다.
    throw new TypeError(token.type)
  }

  // 이제 우리는 `Program`노드인 root를 가지는 AST를 생성 할 것입니다.
  let ast = {
    type: 'Program',
    body: [],
  }

  // 그리고 우리는 `walk` 함수를 빠르게 시작하고, 우리의 ast.body에 노드들을 넣을 것입니다.
  //
  // 루프 안에서 이것을 하는 이유는 프로그램이 다른 것과 중첩되지 않고  서로 `CallExpression`을 가질 수 있기 때문입니다.
  //
  //   (add 2 2)
  //   (subtract 4 2)
  //
  //
  while (current < tokens.length) {
    ast.body.push(walk())
  }
  // parser가 끝이 나면 우리는 AST을 리턴할 것 입니다.
  return ast
}

/**
 * ============================================================================
 *                                 ⌒(❀>◞౪◟<❀)⌒
 *                               THE TRAVERSER!!!
 * ============================================================================
 */

/**
 * 우리는 AST를 가지게 되었고, 우리는 visitor로 다른 노드들을 방문 할 수 있길 원해요. 우리는
 * 일치하는 타입의 노드를 만날 때마다, visitor에 대한 메소드들을 호출 할 수 있어야 해요.
 *    traverse(ast, {
 *      Program: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *
 *     CallExpression: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *
 *     NumberLiteral: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *   });
 *
 */

// 그래서 우리는 AST와 visitor를 받는 traverser 함수를 정의해요.
// 우리는 이 안에 두개의 함수를 정의할 거에요.
function traverser(ast, visitor) {
  // `traverseArray` 함수는 우리에게 배열을 반복하는 것을 허용하고,  우리가 정의한 다음 함수를
  // 호출 할 것입니다.
  function traverseArray(array, parent) {
    array.forEach(child => {
      traverseNode(child, parent)
    })
  }

  // `traverseNode`는  `node`와 이것의 `parent`노드를 받을 것입니다. 그래서 이것은
  // 우리 visitor 메소드에 둘 다 전달 될 수 있습니다.
  function traverseNode(node, parent) {
    // 우리는 `type`을 매칭 하는 것으로 visitor에 대한 메소드의 존재를 테스트를 하는 것으로
    // 부터 시작됩니다.
    let methods = visitor[node.type]

    // 만약 이 node 타입을 위한 `enter`메소드가 있다면, 우리는 이것과 함께 `node`와 이것의 `parent`를
    // 부를 것입니다.
    if (methods && methods.enter) {
      methods.enter(node, parent)
    }

    // 다음으로 우리는 현재 노드 type으로부터, 이것들을 분리 할 것입니다.
    switch (node.type) {
      // 우리는 우리의 최상위 레벨 `Program`으로 시작 할 것입니다. 프로그램 node들이
      // node들의 배열을 가지는 body라는 이름의 속성을 가지기 때문에, 우리는 아래 계층으로 가기 위해
      // traverseArray` 를 부를 것 입니다.
      //
      //(`traverseArray`는 차례로 `traverseNode`를 호출 할 것이고, 그래서 우리는 재귀적으로
      // 순회되기 위한 원인이였음을 기억 하세요.)
      case 'Program':
        traverseArray(node.body, node)
        break

      // 다음으로 우리는 `CallExpression`를 같이 진행할 것이고, `params`를 순회할 것입니다.
      case 'CallExpression':
        traverseArray(node.params, node)
        break

      // `NumberLiteral` 와 `StringLiteral` 의 경우에 우리는 방문할 어떤 자식도 없기 때문에,
      // 우리는 단지 break 할 것입니다.
      case 'NumberLiteral':
      case 'StringLiteral':
        break

      // 그리고 다시, 만약 노트 타입을 이해하지 못한다면 에러를 던질 것입니다.
      default:
        throw new TypeError(node.type)
    }

    // 만약 이 node type을 위한 `exit` 메소드가 있다면, 우리는 `node`와 이것의`parent`
    // 와 함께 이것을 호출 할 것입니다.
    if (methods && methods.exit) {
      methods.exit(node, parent)
    }
  }
  // 마지막으로 `traverseNode`를 호출하는 것으로 ast와 함께 `parent`가 없는
  // traverser를 시작할 건데, 왜냐하면 최상위 AST는 부모를 가지고 있지 않기 때문입니다.
  traverseNode(ast, null)
}

/**
 * ============================================================================
 *                                   ⁽(◍˃̵͈̑ᴗ˂̵͈̑)⁽
 *                              THE TRANSFORMER!!!
 * ============================================================================
 */

/**
 * 다음으로 transformer입니다. 우리 transformer는 우리가 만든 AST 가져 올것이고, 이것을 우리의
 * traverser 함수에 visitor와 와 함께 통과 시키고, 새로운 ast를 생성할 것입니다.
 *
 * ----------------------------------------------------------------------------
 *   Original AST                     |   Transformed AST
 * ----------------------------------------------------------------------------
 *   {                                |   {
 *     type: 'Program',               |     type: 'Program',
 *     body: [{                       |     body: [{
 *       type: 'CallExpression',      |       type: 'ExpressionStatement',
 *       name: 'add',                 |       expression: {
 *       params: [{                   |         type: 'CallExpression',
 *         type: 'NumberLiteral',     |         callee: {
 *         value: '2'                 |           type: 'Identifier',
 *       }, {                         |           name: 'add'
 *         type: 'CallExpression',    |         },
 *         name: 'subtract',          |         arguments: [{
 *         params: [{                 |           type: 'NumberLiteral',
 *           type: 'NumberLiteral',   |           value: '2'
 *           value: '4'               |         }, {
 *         }, {                       |           type: 'CallExpression',
 *           type: 'NumberLiteral',   |           callee: {
 *           value: '2'               |             type: 'Identifier',
 *         }]                         |             name: 'subtract'
 *       }]                           |           },
 *     }]                             |           arguments: [{
 *   }                                |             type: 'NumberLiteral',
 *                                    |             value: '4'
 * ---------------------------------- |           }, {
 *                                    |             type: 'NumberLiteral',
 *                                    |             value: '2'
 *                                    |           }]
 *     (죄송합니다. 남은게 너무 많네요)      |         }
 *                                    |       }
 *                                    |     }]
 *                                    |   }
 * ----------------------------------------------------------------------------
 *
 */

// 그래서 우리는 lisp ast를 받아드릴 transfor 함수를 가지고 있습니다.
function transformer(ast) {
  // 우리는 이전 AST가 program 노드를 가졌던 것 처럼 newAst를 만들 것입니다.
  let newAst = {
    type: 'Program',
    body: [],
  }

  // 다음에 우리는 약간의 속임수와 약간의 반칙을 만들어 보려구요. 우리는 부모 노드에 컨텍스트라는 속성을 사용해서 노드를
  // 부모 `context`에 push 할 겁니다. 일반적으로 이것을 더 나은 추상화를 할 수 있지만, 우리의 목적을 위해
  // 이것을 심플하게 유지 할 거에요.
  //
  // 단지 context가 old ast *로부터* 새로운 ast *로* 참조하는것 임을 주목하세요.
  ast._context = newAst.body

  // 우리는 ast와 visitor와 함께 traverser 함수를 부르는 것으로 시작 할 것입니다.
  traverser(ast, {
    // 첫번째로 visitor메소드는  어떤 `NumberLiteral`도 받아드립니다.
    NumberLiteral: {
      //우리는 enter로 그들을 방문할 것이구요.
      enter(node, parent) {
        // 우리는 부모 context를 push할 `NumberLiteral`이라는 이름의 새로운 노드를 생성 할
        // 것입니다.
        parent._context.push({
          type: 'NumberLiteral',
          value: node.value,
        })
      },
    },

    // 다음은 `StringLiteral`를 가질것입니다.
    StringLiteral: {
      enter(node, parent) {
        parent._context.push({
          type: 'StringLiteral',
          value: node.value,
        })
      },
    },

    // 다음은 `CallExpression`
    CallExpression: {
      enter(node, parent) {
        // 우리는 중첩된 `Identifier`와 함께 새로운 노드 `CallExpression`를 만드는 것을 시작합니다.
        let expression = {
          type: 'CallExpression',
          callee: {
            type: 'Identifier',
            name: node.name,
          },
          arguments: [],
        }

        // 다음으로 우리는 `expression`의 인자들을 참조하기 위한 원래 `CallExpression` 노드에
        // 새로운 context를 정의할 것입니다. 그래서 우리는 인자들을 push 할 수 있게 됩니다.
        node._context = expression.arguments

        // 그런 후에 만약 부모노드가 `CallExpression`인지 체크 합니다.
        // 만약 아니라면 ....
        if (parent.type !== 'CallExpression') {
          // 우리는 우리의 `CallExpression`노드를 `ExpressionStatement`와 함께
          // 감쌀 것입니다. 우리가 이것을 하는 이유는 자바스크립트에서 최상위 계층의 `CallExpression`
          // 는 실제로 명령문이기 때문입니다.
          expression = {
            type: 'ExpressionStatement',
            expression: expression,
          }
        }
        // 마지막으로, 우리는 우리의(감쌀수 있는) `CallExpression`를 `parent`의 context`에
        // push할 것입니다.
        parent._context.push(expression)
      },
    },
  })

  // 우리의 transformer 함수 마지막으로 우리는 우리가 만든 새로운 newAst를 리턴할 것입니다.
  return newAst
}

/**
 * ============================================================================
 *                               ヾ（〃＾∇＾）ﾉ♪
 *                            THE CODE GENERATOR!!!!
 * ============================================================================
 */

/**
 * 지금부터 마지막 단계로 넘어 가볼까요 : The Code Generator(코드 생성기)
 *
 * 우리의 code generator는 하나의 거대한 문자열안의 tree에 각각의 노드들을 출력하기 위해 스스로를
 * 재귀적으로 호출 할 것입니다.
 */

function codeGenerator(node) {
  // 우리는 `node`의 `type`으로부터 이것들을 분해할 것입니다.
  switch (node.type) {
    // 만약 `Program` node를 가졌다면. 우리는 'body안의 각각의 node들을 통해 map(탐색)할 것이고,
    // code generator를 통해 그들을 실행하고, 새로운 줄과 함께 그것들을 join할 것입니다.
    case 'Program':
      return node.body.map(codeGenerator).join('\n')

    // `ExpressionStatement`를 위해 우리는 중첩된 expression에 code generator를 호출 할 것이고,
    // 우리는 세미콜론을 더할 것입니다.
    case 'ExpressionStatement':
      return (
        codeGenerator(node.expression) + ';' // << (...왜냐면 우리는 *정확한* 방법으로 코드를 작성하길 좋아해요.)
      )

    // `CallExpression`를 위해 우리는 `callee`를 출력 할 것이고, 열린 소괄호를 더하고,
    // 우리는 `arguments` 배열 안의 각각의 노드들을 map할 것이고, 그것들을 code generator로 실행 할
    // 것이고, 콤마와 그들을 join하고, 우리는 닫는 소괄호를 더할 것입니다.
    case 'CallExpression':
      return codeGenerator(node.callee) + '(' + node.arguments.map(codeGenerator).join(', ') + ')'
    // `Identifier`를 위해  우리는 `node`의 이름을 리턴 할 것입니다.
    case 'Identifier':
      return node.name

    // `NumberLiteral`을 위해 우리는 `node`의 값을 리턴 할 것입니다.
    case 'NumberLiteral':
      return node.value

    // `StringLiteral`를 위해 `node`의 값에 둘러 쌓인 쌍따옴표를 더할 것입니다.
    case 'StringLiteral':
      return '"' + node.value + '"'

    // 그리고 만약 노드를 인식할 수 없다면, 에러를 던집니다.
    default:
      throw new TypeError(node.type)
  }
}

/**
 * ============================================================================
 *                                  (۶* ‘ヮ’)۶”
 *                         !!!!!!!!THE COMPILER!!!!!!!!
 * ============================================================================
 */

/**
 * 드뎌 마지막이에요! 우리는 우리의 `compiler` 함수를 생성 할 것이에요. 여기에 파이프라인의 모든 부분
 * 들을 우리는 연결할 것이에요.
 *
 *
 *   1. input  => tokenizer   => tokens
 *   2. tokens => parser      => ast
 *   3. ast    => transformer => newAst
 *   4. newAst => generator   => output
 */

function compiler(input) {
  let tokens = tokenizer(input)
  let ast = parser(tokens)
  let newAst = transformer(ast)
  let output = codeGenerator(newAst)

  // 심플하게 output을 리턴해여!!
  return output
}

/**
 * ============================================================================
 *                                   (๑˃̵ᴗ˂̵)و
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!YOU MADE IT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * ============================================================================
 */

// 이제 저는 모든것을 exporting 합니다...
module.exports = {
  tokenizer,
  parser,
  traverser,
  transformer,
  codeGenerator,
  compiler,
}
