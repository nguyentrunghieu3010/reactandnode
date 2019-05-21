import { SingletonDemo } from './creational/singleton';
import { AbstractFactoryDemo } from './creational/abstract_factory';
import { FactoryDemo } from './creational/factory';
import { BuilderDemo } from './creational/builder';
import { PrototypeDemo } from './creational/prototype';
import { AdapterDemo } from './structural/adapter';
import { BridgeDemo } from './structural/bridge';
import { CompositeDemo } from './structural/composite';
import { DecoratorDemo } from './structural/decorator';

SingletonDemo.execute(false);
AbstractFactoryDemo.execute(false);
FactoryDemo.execute(false);
BuilderDemo.execute(false);
PrototypeDemo.execute(false);
AdapterDemo.execute(false);
BridgeDemo.execute(false);
CompositeDemo.execute(false);
DecoratorDemo.execute(true);