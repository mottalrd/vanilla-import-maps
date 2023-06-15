// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import { TestClass as testTop } from "src/test_class"

let a = new testTop();
console.log(a.loaded());



