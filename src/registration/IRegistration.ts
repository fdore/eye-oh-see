interface IRegistration {
  parameters: IParameter[];
  factory;
  disposalFunction;
  providedInstance(instance: any);
}
