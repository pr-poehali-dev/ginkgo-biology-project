import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface TreeData {
  id: string;
  name: string;
  latinName: string;
  description: string;
  history: string;
  characteristics: {
    height: string;
    lifespan: string;
    habitat: string;
    leaves: string;
    distribution: string;
  };
}

const treesData: TreeData[] = [
  {
    id: 'ginkgo',
    name: 'Гинкго двухлопастный',
    latinName: 'Ginkgo biloba',
    description: 'Реликтовое растение, единственный современный представитель класса Гинкговые. Считается живым ископаемым, так как существует на Земле более 270 миллионов лет. Дерево обладает уникальной веерообразной листвой, которая осенью приобретает золотисто-желтый цвет.',
    history: 'Гинкго появился в пермском периоде и был широко распространен в мезозойскую эру. В дикой природе почти исчез, но сохранился благодаря культивированию в священных местах Китая и Японии. В Европу завезен в 1730 году. Дерево пережило атомную бомбардировку Хиросимы — экземпляр в 1 км от эпицентра выжил и продолжает расти.',
    characteristics: {
      height: '20-35 метров',
      lifespan: 'До 2500 лет',
      habitat: 'Умеренный климат, влажные почвы',
      leaves: 'Веерообразные, двухлопастные, 5-8 см',
      distribution: 'Восточная Азия (культивируется повсеместно)'
    }
  },
  {
    id: 'gymnocladus',
    name: 'Бундук двудомный',
    latinName: 'Gymnocladus dioicus',
    description: 'Листопадное дерево из семейства Бобовые. Характеризуется крупными дваждыперистыми листьями длиной до 1 метра и необычными коричневыми стручками. Название происходит от греческих слов "голый" и "ветвь", так как зимой дерево выглядит безжизненным.',
    history: 'Североамериканский вид, традиционно использовавшийся коренными народами. Семена применялись как заменитель кофе (отсюда английское название Kentucky Coffee Tree). В XIX веке активно интродуцирован в Европу как декоративное и парковое растение. В естественной среде встречается все реже из-за утраты речных долин.',
    characteristics: {
      height: '15-25 метров',
      lifespan: 'До 150 лет',
      habitat: 'Речные долины, влажные плодородные почвы',
      leaves: 'Дваждыперистые, до 90 см длиной',
      distribution: 'Центральная и Восточная часть Северной Америки'
    }
  },
  {
    id: 'magnolia',
    name: 'Магнолия обратнояйцевидная',
    latinName: 'Magnolia obovata',
    description: 'Крупное листопадное дерево с огромными листьями и ароматными белыми цветками. Один из самых северных видов магнолий, приспособленный к холодному климату. Цветки достигают 15-20 см в диаметре и обладают интенсивным сладким запахом.',
    history: 'Древний род, появившийся около 95 миллионов лет назад, когда пчел еще не существовало — опылялись жуками. Магнолия обратнояйцевидная эндемична для Японии, где использовалась в традиционной медицине. Введена в европейскую культуру в 1865 году. Название рода дано в честь французского ботаника Пьера Маньоля.',
    characteristics: {
      height: '15-30 метров',
      lifespan: 'До 200 лет',
      habitat: 'Горные леса, влажные регионы',
      leaves: 'Обратнояйцевидные, 20-40 см длиной',
      distribution: 'Япония (острова Хоккайдо и Хонсю)'
    }
  },
  {
    id: 'oak',
    name: 'Дуб болотный',
    latinName: 'Quercus palustris',
    description: 'Быстрорастущий вид дуба с характерной пирамидальной кроной и глубоко рассеченными листьями. Отличается яркой осенней окраской — от алого до пурпурно-коричневого. Получил название благодаря способности расти на влажных заболоченных участках.',
    history: 'Североамериканский вид, естественно произрастающий в заболоченных низинах и поймах рек. Активно использовался коренным населением для изготовления красителей из коры. В Европе культивируется с 1770 года как декоративное дерево. Популярен в городском озеленении благодаря устойчивости к загрязнению и эффектному виду.',
    characteristics: {
      height: '20-30 метров',
      lifespan: 'До 120 лет',
      habitat: 'Влажные низины, поймы рек',
      leaves: 'Глубоко лопастные, 7-13 см',
      distribution: 'Восточная и Центральная часть США'
    }
  },
  {
    id: 'corylus',
    name: 'Лещина древовидная',
    latinName: 'Corylus colurna',
    description: 'Крупное дерево из семейства Березовые, в отличие от кустарниковых форм лещины. Образует стройный ствол и правильную пирамидальную крону. Кора светло-серая, с возрастом растрескивается мелкими пластинками. Плоды — орехи в трубчатой обертке.',
    history: 'Третичный реликт, сохранившийся с доледникового периода. Естественный ареал — Юго-Восточная Европа и Малая Азия. В Османской империи орехи традиционно использовались в кулинарии. В европейское озеленение введен в XVI веке. Устойчив к городским условиям, часто высаживается вдоль улиц.',
    characteristics: {
      height: '20-35 метров',
      lifespan: 'До 200 лет',
      habitat: 'Горные леса, известковые почвы',
      leaves: 'Округлые, зубчатые, 7-12 см',
      distribution: 'Юго-Восточная Европа, Кавказ, Малая Азия'
    }
  },
  {
    id: 'phellodendron',
    name: 'Бархат сахалинский',
    latinName: 'Phellodendron sachalinense',
    description: 'Листопадное дерево с характерной бархатистой пробковой корой пепельно-серого цвета. Листья перистые, при растирании издают специфический запах. Двудомное растение — мужские и женские цветки на разных деревьях. Плоды — черные ягодообразные костянки.',
    history: 'Реликтовый вид дальневосточной флоры, близкий родственник бархата амурского. Эндемик Сахалина и Курильских островов. Традиционно использовался в народной медицине айнов. Кора содержит алкалоид берберин, применяемый в фармакологии. В культуре с конца XIX века, ценится как декоративное и лекарственное растение.',
    characteristics: {
      height: '15-25 метров',
      lifespan: 'До 300 лет',
      habitat: 'Смешанные леса, долины рек',
      leaves: 'Перистосложные, 25-40 см',
      distribution: 'Сахалин, Курильские острова'
    }
  }
];

const bibliographyData = [
  {
    category: 'Книги',
    sources: [
      'Соколов С.Я., Связева О.А. География древесных растений СССР. — М.-Л.: Наука, 1965. — 265 с.',
      'Колесников А.И. Декоративная дендрология. — М.: Лесная промышленность, 1974. — 703 с.',
      'Деревья и кустарники СССР. Том I–VI. — М.-Л.: Изд-во АН СССР, 1949–1962.'
    ]
  },
  {
    category: 'Научные статьи',
    sources: [
      'Crane P.R. Ginkgo: The Tree That Time Forgot. — Yale University Press, 2013.',
      'Zhou Z., Zheng S. Palaeobiology of the Ginkgoales // Palaeoworld. 2003. Vol. 14. P. 1–127.',
      'Hori T., Ridge R.W. et al. Insights into the phylogenetic relationships within Magnoliaceae // Int. J. Plant Sci. 2006.'
    ]
  },
  {
    category: 'Электронные ресурсы',
    sources: [
      'The Plant List (2013). Version 1.1. http://www.theplantlist.org/',
      'ГБИС "Плантариум" — определитель растений онлайн. https://www.plantarium.ru/',
      'USDA Plants Database. https://plants.usda.gov/'
    ]
  }
];

export default function Index() {
  const [selectedTree, setSelectedTree] = useState<TreeData>(treesData[0]);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-2">
            <Icon name="Trees" size={32} className="text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Древние деревья планеты</h1>
          </div>
          <p className="text-muted-foreground">Научная презентация о реликтовых и интродуцированных видах деревьев</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-6">
          <aside className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Icon name="List" size={20} />
                  Виды деревьев
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {treesData.map((tree) => (
                  <button
                    key={tree.id}
                    onClick={() => setSelectedTree(tree)}
                    className={`w-full text-left p-3 rounded-md transition-all hover:bg-accent/50 ${
                      selectedTree.id === tree.id ? 'bg-accent text-accent-foreground' : 'bg-muted/30'
                    }`}
                  >
                    <div className="font-semibold text-sm mb-1">{tree.name}</div>
                    <div className="text-xs text-muted-foreground italic">{tree.latinName}</div>
                  </button>
                ))}
                <Separator className="my-4" />
                <button
                  onClick={() => {
                    document.getElementById('bibliography')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full text-left p-3 rounded-md bg-muted/30 hover:bg-accent/50 transition-all"
                >
                  <div className="font-semibold text-sm flex items-center gap-2">
                    <Icon name="BookOpen" size={16} />
                    Библиография
                  </div>
                </button>
              </CardContent>
            </Card>
          </aside>

          <main className="lg:col-span-3 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{selectedTree.name}</CardTitle>
                    <CardDescription className="text-lg italic">{selectedTree.latinName}</CardDescription>
                  </div>
                  <Badge variant="outline" className="text-sm">
                    <Icon name="Leaf" size={14} className="mr-1" />
                    Реликт
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="description" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="description" className="flex items-center gap-2">
                      <Icon name="FileText" size={16} />
                      Описание
                    </TabsTrigger>
                    <TabsTrigger value="history" className="flex items-center gap-2">
                      <Icon name="Clock" size={16} />
                      История
                    </TabsTrigger>
                    <TabsTrigger value="characteristics" className="flex items-center gap-2">
                      <Icon name="BarChart3" size={16} />
                      Характеристики
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="description" className="mt-6">
                    <div className="prose prose-sm max-w-none">
                      <p className="text-base leading-relaxed">{selectedTree.description}</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="history" className="mt-6">
                    <div className="prose prose-sm max-w-none">
                      <p className="text-base leading-relaxed">{selectedTree.history}</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="characteristics" className="mt-6">
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4 bg-muted/20">
                          <div className="flex items-center gap-2 mb-2">
                            <Icon name="ArrowUp" size={18} className="text-primary" />
                            <span className="font-semibold text-sm text-muted-foreground">Высота</span>
                          </div>
                          <p className="text-lg font-bold">{selectedTree.characteristics.height}</p>
                        </div>

                        <div className="border rounded-lg p-4 bg-muted/20">
                          <div className="flex items-center gap-2 mb-2">
                            <Icon name="Calendar" size={18} className="text-primary" />
                            <span className="font-semibold text-sm text-muted-foreground">Продолжительность жизни</span>
                          </div>
                          <p className="text-lg font-bold">{selectedTree.characteristics.lifespan}</p>
                        </div>

                        <div className="border rounded-lg p-4 bg-muted/20">
                          <div className="flex items-center gap-2 mb-2">
                            <Icon name="MapPin" size={18} className="text-primary" />
                            <span className="font-semibold text-sm text-muted-foreground">Ареал распространения</span>
                          </div>
                          <p className="text-lg font-bold">{selectedTree.characteristics.distribution}</p>
                        </div>

                        <div className="border rounded-lg p-4 bg-muted/20">
                          <div className="flex items-center gap-2 mb-2">
                            <Icon name="Mountain" size={18} className="text-primary" />
                            <span className="font-semibold text-sm text-muted-foreground">Среда обитания</span>
                          </div>
                          <p className="text-lg font-bold">{selectedTree.characteristics.habitat}</p>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4 bg-muted/20">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon name="Leaf" size={18} className="text-primary" />
                          <span className="font-semibold text-sm text-muted-foreground">Листья</span>
                        </div>
                        <p className="text-lg font-bold">{selectedTree.characteristics.leaves}</p>
                      </div>

                      <div className="mt-6">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Icon name="TrendingUp" size={18} className="text-primary" />
                          Сравнительная диаграмма высоты
                        </h4>
                        <div className="space-y-3">
                          {treesData.map((tree) => {
                            const maxHeight = parseInt(tree.characteristics.height.split('-')[1]);
                            const percentage = (maxHeight / 35) * 100;
                            return (
                              <div key={tree.id} className="space-y-1">
                                <div className="flex justify-between text-sm">
                                  <span className={tree.id === selectedTree.id ? 'font-bold' : ''}>{tree.name}</span>
                                  <span className="text-muted-foreground">{tree.characteristics.height}</span>
                                </div>
                                <div className="h-3 bg-muted rounded-full overflow-hidden">
                                  <div
                                    className={`h-full rounded-full transition-all ${
                                      tree.id === selectedTree.id ? 'bg-primary' : 'bg-secondary'
                                    }`}
                                    style={{ width: `${percentage}%` }}
                                  />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card id="bibliography">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="BookOpen" size={24} />
                  Библиография и источники
                </CardTitle>
                <CardDescription>
                  Научные источники и литература, использованные при подготовке презентации
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {bibliographyData.map((section, idx) => (
                  <div key={idx}>
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Icon name="FolderOpen" size={18} className="text-primary" />
                      {section.category}
                    </h3>
                    <ol className="space-y-2 list-decimal list-inside">
                      {section.sources.map((source, sourceIdx) => (
                        <li key={sourceIdx} className="text-sm leading-relaxed pl-2">
                          {source}
                        </li>
                      ))}
                    </ol>
                    {idx < bibliographyData.length - 1 && <Separator className="mt-4" />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </main>
        </div>
      </div>

      <footer className="border-t mt-12 py-6 bg-card">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Научная презентация по биологии • 2025</p>
        </div>
      </footer>
    </div>
  );
}
