import Beverage from "../Beverage";

export default abstract class CondimentDecorator extends Beverage {
  public abstract getDescription(): string;
}
