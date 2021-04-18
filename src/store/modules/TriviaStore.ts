import store from "..";

import { Module, Mutation, VuexModule } from "vuex-class-modules";
import { TriviaItem } from "../../interfaces/TriviaItem";
import fetchTriviaApi from "../../services/TriviaApi";

@Module({ generateMutationSetters: true })
class TriviaStore extends VuexModule {
  public triviaItems: TriviaItem[] = [];

  @Mutation
  getItems(): void {
    fetchTriviaApi().then((res) => (this.triviaItems = [...res]));
  }
}

export const triviaStore = new TriviaStore({
  store,
  name: "triviaItemStore",
});
