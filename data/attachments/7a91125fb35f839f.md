# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth/SignUp/SignUpNegative.spec.js >> Sign Up negative tests >> Sign in with empty confirmation password
- Location: tests/auth/SignUp/SignUpNegative.spec.js:204:9

# Error details

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://parabank.parasoft.com/parabank/register.htm", waiting until "load"

```

# Test source

```ts
  1   | import  {expect, testStep} from '../../../common/helpers/pwHelpers';
  2   | 
  3   | export class SignUpPage{
  4   | constructor(page, userId){
  5   |     this.page = page;
  6   |     this.userId = userId;
  7   |     this.firstNameField = page.locator('[id="customer.firstName"]');
  8   |     this.lastNameField = page.locator('[id="customer.lastName"]');
  9   |     this.adressField = page.locator('[id="customer.address.street"]');
  10  |     this.cityField = page.locator('[id="customer.address.city"]');
  11  |     this.stateField = page.locator('[id="customer.address.state"]');
  12  |     this.zipCodeField = page.locator('[id="customer.address.zipCode"]');
  13  |     this.phoneNumberField = page.locator('[id="customer.phoneNumber"]');
  14  |     this.ssnCodeField = page.locator('[id="customer.ssn"]');
  15  |     this.usernameField = page.locator('[id="customer.username"]');
  16  |     this.passwordField = page.locator('[id="customer.password"]');
  17  |     this.confirmationPasswordField = page.locator('#repeatedPassword');
  18  |     this.registerButton = page.getByRole('button', { name: 'Register' });
  19  |     this.errorMessage = page.locator('.error');
  20  |     this.usernameExistsError = page.getByText('This username already exists');
  21  | 
  22  |     }
  23  | 
  24  | 
  25  |     async step(title, stepToRun){
  26  |         return await testStep(title, stepToRun, this.userId);
  27  |     }
  28  |     async open(){
  29  |         await this.step(`Open 'Sign Up' page`, async()=>{
> 30  |         await this.page.goto('/parabank/register.htm');
      |                         ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  31  |         });
  32  |         }
  33  | 
  34  | 
  35  |     async inputFirstNameField(firstName){
  36  |         await this.step(`Fill the 'First Name' field'`, async()=>{
  37  |         await this.firstNameField.fill(firstName);
  38  | 
  39  |         });
  40  |     }
  41  |     async inputLastNameField(lastName){
  42  |         await this.step(`Fill the 'Last Name' field'`, async()=>{
  43  |         await this.lastNameField.fill(lastName);
  44  | 
  45  |         });
  46  |     }
  47  |     
  48  |     async inputAdressField(adress){
  49  |         await this.step(`Fill the 'Adress' field'`, async()=>{
  50  |         await this.adressField.fill(adress);
  51  | 
  52  |         });
  53  |     }
  54  | 
  55  |      async inputCityField(city){
  56  |         await this.step(`Fill the 'City' field'`, async()=>{
  57  |         await this.cityField.fill(city);
  58  | 
  59  |         });
  60  |     }
  61  |     async inputStateField(state){
  62  |         await this.step(`Fill the 'State' field'`, async()=>{
  63  |         await this.stateField.fill(state);
  64  | 
  65  |         });
  66  |     }
  67  |      async inputZipCodeField(zip){
  68  |         await this.step(`Fill the 'Zip Code' field'`, async()=>{
  69  |         await this.zipCodeField.fill(zip);
  70  | 
  71  |         });
  72  |     }
  73  |     async inputPhoneNumberField(number){
  74  |         await this.step(`Fill the 'Phone #' field'`, async()=>{
  75  |         await this.phoneNumberField.fill(number);
  76  | 
  77  |         });
  78  |     }
  79  |     async inputSSNCodeField(ssnNumber){
  80  |         await this.step(`Fill the 'SSN' field'`, async()=>{
  81  |         await this.ssnCodeField.fill(ssnNumber);
  82  | 
  83  |         });
  84  |     }
  85  |      async inputUsernameField(username){
  86  |         await this.step(`Fill the 'Username' field'`, async()=>{
  87  |         await this.usernameField.fill(username);
  88  | 
  89  |         });
  90  |     }
  91  |      async inputPasswordField(password){
  92  |         await this.step(`Fill the 'Password' field'`, async()=>{
  93  |         await this.passwordField.fill(password);
  94  |         });
  95  |     }
  96  |       async inputConfirmationPasswordField(password){
  97  |         await this.step(`Fill the 'Confirm' field'`, async()=>{
  98  |         await this.confirmationPasswordField.fill(password);
  99  |         });
  100 |     }
  101 |     async clickOnRegisterButton(){
  102 |         await this.step(`Click on the 'Register' button'`, async()=>{
  103 |         await this.registerButton.click();
  104 |         });
  105 |     }
  106 | 
  107 |     async assertErrorMessageContainsText(messageText){
  108 |         await this.step (`Assert the '${messageText}' error is shown`, async () => {
  109 |       await expect(this.errorMessage).toContainText(messageText);
  110 |     });
  111 |   }
  112 | 
  113 |     async isUsernameAlreadyExistsErrorVisible(){
  114 |         try {
  115 |             const count = await this.usernameExistsError.count();
  116 |             if (count === 0) {
  117 |                 return false;
  118 |             }
  119 | 
  120 |             return await this.usernameExistsError.first().isVisible().catch(() => false);
  121 |         } catch {
  122 |             return false;
  123 |         }
  124 |     }
  125 |     }
  126 | 
```