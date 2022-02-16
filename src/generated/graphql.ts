export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Any: any;
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: any;
  /** The `Long` scalar type represents non-fractional signed whole 64-bit numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
};

export enum AccountTypes {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
}

export type AccountTypesOperationFilterInput = {
  eq?: InputMaybe<AccountTypes>;
  in?: InputMaybe<Array<AccountTypes>>;
  neq?: InputMaybe<AccountTypes>;
  nin?: InputMaybe<Array<AccountTypes>>;
};

export enum ApplyPolicy {
  AfterResolver = 'AFTER_RESOLVER',
  BeforeResolver = 'BEFORE_RESOLVER',
}

export type BooleanOperationFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  neq?: InputMaybe<Scalars['Boolean']>;
};

export type BrandDto = {
  __typename?: 'BrandDto';
  id: Scalars['Int'];
  inspos?: Maybe<Array<Maybe<Users>>>;
  liked: Scalars['Boolean'];
  likesCount: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  photos?: Maybe<Array<Maybe<Scalars['String']>>>;
  sizes?: Maybe<Array<Maybe<Scalars['Any']>>>;
  styles?: Maybe<Array<Maybe<Styles>>>;
  thumbnail?: Maybe<Scalars['String']>;
};

export type BrandDtoCollectionSegment = {
  __typename?: 'BrandDtoCollectionSegment';
  items?: Maybe<Array<Maybe<BrandDto>>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int'];
};

export type BrandDtoFilterInput = {
  and?: InputMaybe<Array<BrandDtoFilterInput>>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  inspos?: InputMaybe<ListFilterInputTypeOfUsersFilterInput>;
  liked?: InputMaybe<BooleanOperationFilterInput>;
  likesCount?: InputMaybe<ComparableInt32OperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<BrandDtoFilterInput>>;
  photos?: InputMaybe<ListStringOperationFilterInput>;
  styles?: InputMaybe<ListFilterInputTypeOfStylesFilterInput>;
  thumbnail?: InputMaybe<StringOperationFilterInput>;
};

export type BrandDtoSortInput = {
  id?: InputMaybe<SortEnumType>;
  liked?: InputMaybe<SortEnumType>;
  likesCount?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  thumbnail?: InputMaybe<SortEnumType>;
};

export type BrandLikes = {
  __typename?: 'BrandLikes';
  brand?: Maybe<Brands>;
  brandId: Scalars['Int'];
  id: Scalars['Int'];
  isDeleted: Scalars['Boolean'];
  liked: Scalars['Boolean'];
  user?: Maybe<Users>;
  userId: Scalars['Int'];
};

export type BrandLikesFilterInput = {
  and?: InputMaybe<Array<BrandLikesFilterInput>>;
  brand?: InputMaybe<BrandsFilterInput>;
  brandId?: InputMaybe<ComparableInt32OperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  liked?: InputMaybe<BooleanOperationFilterInput>;
  or?: InputMaybe<Array<BrandLikesFilterInput>>;
  user?: InputMaybe<UsersFilterInput>;
  userId?: InputMaybe<ComparableInt32OperationFilterInput>;
};

export type Brands = {
  __typename?: 'Brands';
  brandLikes?: Maybe<Array<Maybe<BrandLikes>>>;
  id: Scalars['Int'];
  isDeleted: Scalars['Boolean'];
  likesCount: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  photos?: Maybe<Array<Maybe<Scalars['String']>>>;
  posts?: Maybe<Array<Maybe<Posts>>>;
  sizes?: Maybe<Array<Maybe<Scalars['Any']>>>;
  styleBrands?: Maybe<Array<Maybe<StyleBrands>>>;
  thumbnail?: Maybe<Scalars['String']>;
  userBrands?: Maybe<Array<Maybe<UserBrands>>>;
};

export type BrandsCollectionSegment = {
  __typename?: 'BrandsCollectionSegment';
  items?: Maybe<Array<Maybe<Brands>>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int'];
};

export type BrandsFilterInput = {
  and?: InputMaybe<Array<BrandsFilterInput>>;
  brandLikes?: InputMaybe<ListFilterInputTypeOfBrandLikesFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  likesCount?: InputMaybe<ComparableInt32OperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<BrandsFilterInput>>;
  photos?: InputMaybe<ListStringOperationFilterInput>;
  posts?: InputMaybe<ListFilterInputTypeOfPostsFilterInput>;
  styleBrands?: InputMaybe<ListFilterInputTypeOfStyleBrandsFilterInput>;
  thumbnail?: InputMaybe<StringOperationFilterInput>;
  userBrands?: InputMaybe<ListFilterInputTypeOfUserBrandsFilterInput>;
};

export type BrandsSortInput = {
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  likesCount?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  thumbnail?: InputMaybe<SortEnumType>;
};

export type ClosetInput = {
  closetItems?: InputMaybe<Array<InputMaybe<ClosetItemInput>>>;
  outfitName?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['String']>;
};

export type ClosetItemInput = {
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  xCoordinate: Scalars['Long'];
  yCoordinate: Scalars['Long'];
};

export type ClosetItems = {
  __typename?: 'ClosetItems';
  closet?: Maybe<Closets>;
  closetId: Scalars['Int'];
  id: Scalars['Int'];
  isDeleted: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  xCoordinate: Scalars['Long'];
  yCoordinate: Scalars['Long'];
};

export type ClosetItemsFilterInput = {
  and?: InputMaybe<Array<ClosetItemsFilterInput>>;
  closet?: InputMaybe<ClosetsFilterInput>;
  closetId?: InputMaybe<ComparableInt32OperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ClosetItemsFilterInput>>;
  url?: InputMaybe<StringOperationFilterInput>;
  xCoordinate?: InputMaybe<ComparableInt64OperationFilterInput>;
  yCoordinate?: InputMaybe<ComparableInt64OperationFilterInput>;
};

export type Closets = {
  __typename?: 'Closets';
  closetItems?: Maybe<Array<Maybe<ClosetItems>>>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  isDeleted: Scalars['Boolean'];
  outfitName?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  user?: Maybe<Users>;
  userId: Scalars['Int'];
};

export type ClosetsFilterInput = {
  and?: InputMaybe<Array<ClosetsFilterInput>>;
  closetItems?: InputMaybe<ListFilterInputTypeOfClosetItemsFilterInput>;
  createdAt?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  or?: InputMaybe<Array<ClosetsFilterInput>>;
  outfitName?: InputMaybe<StringOperationFilterInput>;
  photo?: InputMaybe<StringOperationFilterInput>;
  user?: InputMaybe<UsersFilterInput>;
  userId?: InputMaybe<ComparableInt32OperationFilterInput>;
};

/** Information about the offset pagination. */
export type CollectionSegmentInfo = {
  __typename?: 'CollectionSegmentInfo';
  /** Indicates whether more items exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean'];
  /** Indicates whether more items exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean'];
};

export type ComparableDateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
  ngt?: InputMaybe<Scalars['DateTime']>;
  ngte?: InputMaybe<Scalars['DateTime']>;
  nin?: InputMaybe<Array<Scalars['DateTime']>>;
  nlt?: InputMaybe<Scalars['DateTime']>;
  nlte?: InputMaybe<Scalars['DateTime']>;
};

export type ComparableDoubleOperationFilterInput = {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  neq?: InputMaybe<Scalars['Float']>;
  ngt?: InputMaybe<Scalars['Float']>;
  ngte?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<Scalars['Float']>>;
  nlt?: InputMaybe<Scalars['Float']>;
  nlte?: InputMaybe<Scalars['Float']>;
};

export type ComparableInt32OperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
  ngt?: InputMaybe<Scalars['Int']>;
  ngte?: InputMaybe<Scalars['Int']>;
  nin?: InputMaybe<Array<Scalars['Int']>>;
  nlt?: InputMaybe<Scalars['Int']>;
  nlte?: InputMaybe<Scalars['Int']>;
};

export type ComparableInt64OperationFilterInput = {
  eq?: InputMaybe<Scalars['Long']>;
  gt?: InputMaybe<Scalars['Long']>;
  gte?: InputMaybe<Scalars['Long']>;
  in?: InputMaybe<Array<Scalars['Long']>>;
  lt?: InputMaybe<Scalars['Long']>;
  lte?: InputMaybe<Scalars['Long']>;
  neq?: InputMaybe<Scalars['Long']>;
  ngt?: InputMaybe<Scalars['Long']>;
  ngte?: InputMaybe<Scalars['Long']>;
  nin?: InputMaybe<Array<Scalars['Long']>>;
  nlt?: InputMaybe<Scalars['Long']>;
  nlte?: InputMaybe<Scalars['Long']>;
};

export type ComparableNullableOfInt32OperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
  ngt?: InputMaybe<Scalars['Int']>;
  ngte?: InputMaybe<Scalars['Int']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nlt?: InputMaybe<Scalars['Int']>;
  nlte?: InputMaybe<Scalars['Int']>;
};

export type ListFilterInputTypeOfBrandLikesFilterInput = {
  all?: InputMaybe<BrandLikesFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<BrandLikesFilterInput>;
  some?: InputMaybe<BrandLikesFilterInput>;
};

export type ListFilterInputTypeOfClosetItemsFilterInput = {
  all?: InputMaybe<ClosetItemsFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<ClosetItemsFilterInput>;
  some?: InputMaybe<ClosetItemsFilterInput>;
};

export type ListFilterInputTypeOfClosetsFilterInput = {
  all?: InputMaybe<ClosetsFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<ClosetsFilterInput>;
  some?: InputMaybe<ClosetsFilterInput>;
};

export type ListFilterInputTypeOfPostLikesFilterInput = {
  all?: InputMaybe<PostLikesFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<PostLikesFilterInput>;
  some?: InputMaybe<PostLikesFilterInput>;
};

export type ListFilterInputTypeOfPostsFilterInput = {
  all?: InputMaybe<PostsFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<PostsFilterInput>;
  some?: InputMaybe<PostsFilterInput>;
};

export type ListFilterInputTypeOfStyleBrandsFilterInput = {
  all?: InputMaybe<StyleBrandsFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<StyleBrandsFilterInput>;
  some?: InputMaybe<StyleBrandsFilterInput>;
};

export type ListFilterInputTypeOfStyleLikesFilterInput = {
  all?: InputMaybe<StyleLikesFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<StyleLikesFilterInput>;
  some?: InputMaybe<StyleLikesFilterInput>;
};

export type ListFilterInputTypeOfStylesFilterInput = {
  all?: InputMaybe<StylesFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<StylesFilterInput>;
  some?: InputMaybe<StylesFilterInput>;
};

export type ListFilterInputTypeOfUserBrandsFilterInput = {
  all?: InputMaybe<UserBrandsFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<UserBrandsFilterInput>;
  some?: InputMaybe<UserBrandsFilterInput>;
};

export type ListFilterInputTypeOfUserSocialsFilterInput = {
  all?: InputMaybe<UserSocialsFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<UserSocialsFilterInput>;
  some?: InputMaybe<UserSocialsFilterInput>;
};

export type ListFilterInputTypeOfUserStylesFilterInput = {
  all?: InputMaybe<UserStylesFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<UserStylesFilterInput>;
  some?: InputMaybe<UserStylesFilterInput>;
};

export type ListFilterInputTypeOfUsersFilterInput = {
  all?: InputMaybe<UsersFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<UsersFilterInput>;
  some?: InputMaybe<UsersFilterInput>;
};

export type ListResponseBaseOfBrandDto = {
  __typename?: 'ListResponseBaseOfBrandDto';
  result?: Maybe<BrandDtoCollectionSegment>;
  status: ResponseStatus;
};

export type ListResponseBaseOfBrandDtoResultArgs = {
  order?: InputMaybe<Array<BrandDtoSortInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BrandDtoFilterInput>;
};

export type ListResponseBaseOfBrands = {
  __typename?: 'ListResponseBaseOfBrands';
  result?: Maybe<BrandsCollectionSegment>;
  status: ResponseStatus;
};

export type ListResponseBaseOfBrandsResultArgs = {
  order?: InputMaybe<Array<BrandsSortInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BrandsFilterInput>;
};

export type ListResponseBaseOfPostDto = {
  __typename?: 'ListResponseBaseOfPostDto';
  result?: Maybe<PostDtoCollectionSegment>;
  status: ResponseStatus;
};

export type ListResponseBaseOfPostDtoResultArgs = {
  order?: InputMaybe<Array<PostDtoSortInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostDtoFilterInput>;
};

export type ListResponseBaseOfStyles = {
  __typename?: 'ListResponseBaseOfStyles';
  result?: Maybe<StylesCollectionSegment>;
  status: ResponseStatus;
};

export type ListResponseBaseOfStylesResultArgs = {
  order?: InputMaybe<Array<StylesSortInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StylesFilterInput>;
};

export type ListResponseBaseOfUsers = {
  __typename?: 'ListResponseBaseOfUsers';
  result?: Maybe<UsersCollectionSegment>;
  status: ResponseStatus;
};

export type ListResponseBaseOfUsersResultArgs = {
  order?: InputMaybe<Array<UsersSortInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UsersFilterInput>;
};

export type ListStringOperationFilterInput = {
  all?: InputMaybe<StringOperationFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<StringOperationFilterInput>;
  some?: InputMaybe<StringOperationFilterInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  brand_likeBrand?: Maybe<ResponseBase>;
  closet_createCloset?: Maybe<ResponseBaseOfClosets>;
  post_createPost?: Maybe<ResponseBaseOfPosts>;
  post_likePost?: Maybe<ResponseBase>;
  style_likeStyle?: Maybe<ResponseBase>;
  user_setBrands?: Maybe<ResponseBase>;
  user_setStyles?: Maybe<ResponseBase>;
  user_signUp?: Maybe<ResponseBaseOfUsers>;
  user_updateUser?: Maybe<ResponseBaseOfUsers>;
};

export type MutationBrand_LikeBrandArgs = {
  brandId: Scalars['Int'];
  liked?: Scalars['Boolean'];
};

export type MutationCloset_CreateClosetArgs = {
  input?: InputMaybe<ClosetInput>;
};

export type MutationPost_CreatePostArgs = {
  postInput?: InputMaybe<PostInput>;
};

export type MutationPost_LikePostArgs = {
  liked?: Scalars['Boolean'];
  postId: Scalars['Int'];
};

export type MutationStyle_LikeStyleArgs = {
  liked?: Scalars['Boolean'];
  styleId: Scalars['Int'];
};

export type MutationUser_SetBrandsArgs = {
  brandIds?: InputMaybe<Array<Scalars['Int']>>;
};

export type MutationUser_SetStylesArgs = {
  styleIds?: InputMaybe<Array<Scalars['Int']>>;
};

export type MutationUser_UpdateUserArgs = {
  input?: InputMaybe<UserInput>;
};

export type PostDto = {
  __typename?: 'PostDto';
  brand?: Maybe<Brands>;
  content?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  liked: Scalars['Boolean'];
  likes?: Maybe<Array<Maybe<PostLikes>>>;
  likesCount: Scalars['Int'];
  photo?: Maybe<Scalars['String']>;
  postType: PostTypes;
  postedAt: Scalars['DateTime'];
  poster?: Maybe<Users>;
  posterId: Scalars['Int'];
  sizeTag: Scalars['Float'];
  style?: Maybe<Styles>;
  title?: Maybe<Scalars['String']>;
};

export type PostDtoCollectionSegment = {
  __typename?: 'PostDtoCollectionSegment';
  items?: Maybe<Array<Maybe<PostDto>>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int'];
};

export type PostDtoFilterInput = {
  and?: InputMaybe<Array<PostDtoFilterInput>>;
  brand?: InputMaybe<BrandsFilterInput>;
  content?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  liked?: InputMaybe<BooleanOperationFilterInput>;
  likes?: InputMaybe<ListFilterInputTypeOfPostLikesFilterInput>;
  likesCount?: InputMaybe<ComparableInt32OperationFilterInput>;
  or?: InputMaybe<Array<PostDtoFilterInput>>;
  photo?: InputMaybe<StringOperationFilterInput>;
  postType?: InputMaybe<PostTypesOperationFilterInput>;
  postedAt?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  poster?: InputMaybe<UsersFilterInput>;
  posterId?: InputMaybe<ComparableInt32OperationFilterInput>;
  sizeTag?: InputMaybe<ComparableDoubleOperationFilterInput>;
  style?: InputMaybe<StylesFilterInput>;
  title?: InputMaybe<StringOperationFilterInput>;
};

export type PostDtoSortInput = {
  brand?: InputMaybe<BrandsSortInput>;
  content?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  liked?: InputMaybe<SortEnumType>;
  likesCount?: InputMaybe<SortEnumType>;
  photo?: InputMaybe<SortEnumType>;
  postType?: InputMaybe<SortEnumType>;
  postedAt?: InputMaybe<SortEnumType>;
  poster?: InputMaybe<UsersSortInput>;
  posterId?: InputMaybe<SortEnumType>;
  sizeTag?: InputMaybe<SortEnumType>;
  style?: InputMaybe<StylesSortInput>;
  title?: InputMaybe<SortEnumType>;
};

export type PostInput = {
  brandId?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['String']>;
  postType: PostTypes;
  posterId?: InputMaybe<Scalars['Int']>;
  sizeTag?: InputMaybe<Scalars['Float']>;
  styleId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PostLikes = {
  __typename?: 'PostLikes';
  id: Scalars['Int'];
  isDeleted: Scalars['Boolean'];
  liked: Scalars['Boolean'];
  post?: Maybe<Posts>;
  postId: Scalars['Int'];
  user?: Maybe<Users>;
  userId: Scalars['Int'];
};

export type PostLikesFilterInput = {
  and?: InputMaybe<Array<PostLikesFilterInput>>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  liked?: InputMaybe<BooleanOperationFilterInput>;
  or?: InputMaybe<Array<PostLikesFilterInput>>;
  post?: InputMaybe<PostsFilterInput>;
  postId?: InputMaybe<ComparableInt32OperationFilterInput>;
  user?: InputMaybe<UsersFilterInput>;
  userId?: InputMaybe<ComparableInt32OperationFilterInput>;
};

export enum PostTypes {
  Post = 'POST',
  Review = 'REVIEW',
}

export type PostTypesOperationFilterInput = {
  eq?: InputMaybe<PostTypes>;
  in?: InputMaybe<Array<PostTypes>>;
  neq?: InputMaybe<PostTypes>;
  nin?: InputMaybe<Array<PostTypes>>;
};

export type Posts = {
  __typename?: 'Posts';
  brand?: Maybe<Brands>;
  brandId?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isDeleted: Scalars['Boolean'];
  likes?: Maybe<Array<Maybe<PostLikes>>>;
  photo?: Maybe<Scalars['String']>;
  postLikes?: Maybe<Array<Maybe<PostLikes>>>;
  postType: PostTypes;
  postedAt: Scalars['DateTime'];
  poster?: Maybe<Users>;
  posterId: Scalars['Int'];
  sizeTag: Scalars['Float'];
  style?: Maybe<Styles>;
  styleId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type PostsFilterInput = {
  and?: InputMaybe<Array<PostsFilterInput>>;
  brand?: InputMaybe<BrandsFilterInput>;
  brandId?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  content?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  likes?: InputMaybe<ListFilterInputTypeOfPostLikesFilterInput>;
  or?: InputMaybe<Array<PostsFilterInput>>;
  photo?: InputMaybe<StringOperationFilterInput>;
  postLikes?: InputMaybe<ListFilterInputTypeOfPostLikesFilterInput>;
  postType?: InputMaybe<PostTypesOperationFilterInput>;
  postedAt?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  poster?: InputMaybe<UsersFilterInput>;
  posterId?: InputMaybe<ComparableInt32OperationFilterInput>;
  sizeTag?: InputMaybe<ComparableDoubleOperationFilterInput>;
  style?: InputMaybe<StylesFilterInput>;
  styleId?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  title?: InputMaybe<StringOperationFilterInput>;
};

export type Query = {
  __typename?: 'Query';
  brand_getAllBrands?: Maybe<ListResponseBaseOfBrandDto>;
  brand_getBrand?: Maybe<ResponseBaseOfBrandDto>;
  brand_getBrands?: Maybe<ListResponseBaseOfBrands>;
  brand_recommendBrand?: Maybe<ResponseBaseOfBrands>;
  post_getBrandPosts?: Maybe<ListResponseBaseOfPostDto>;
  post_getStylePosts?: Maybe<ListResponseBaseOfPostDto>;
  post_getUserPosts?: Maybe<ListResponseBaseOfPostDto>;
  styles_getStyle?: Maybe<ResponseBaseOfStyleDto>;
  styles_getStyles?: Maybe<ListResponseBaseOfStyles>;
  user_getBrands?: Maybe<ListResponseBaseOfBrands>;
  user_getInspo?: Maybe<ResponseBaseOfUserDto>;
  user_getInspos?: Maybe<ListResponseBaseOfUsers>;
  user_getSelectedInspos?: Maybe<ListResponseBaseOfUsers>;
  user_getStyles?: Maybe<ListResponseBaseOfStyles>;
  user_login?: Maybe<ResponseBaseOfUsers>;
};

export type QueryBrand_GetBrandArgs = {
  brandId: Scalars['Int'];
};

export type QueryBrand_GetBrandsArgs = {
  brandIds?: InputMaybe<Array<Scalars['Int']>>;
};

export type QueryPost_GetBrandPostsArgs = {
  brandId: Scalars['Int'];
};

export type QueryPost_GetStylePostsArgs = {
  styleId: Scalars['Int'];
};

export type QueryStyles_GetStyleArgs = {
  styleId: Scalars['Int'];
};

export type QueryUser_GetInspoArgs = {
  inspoId: Scalars['Int'];
};

export type QueryUser_GetInsposArgs = {
  isCommon?: Scalars['Boolean'];
  isRandom?: Scalars['Boolean'];
};

export type ResponseBase = {
  __typename?: 'ResponseBase';
  status: ResponseStatus;
};

export type ResponseBaseOfBrandDto = {
  __typename?: 'ResponseBaseOfBrandDto';
  result?: Maybe<BrandDto>;
  status: ResponseStatus;
};

export type ResponseBaseOfBrands = {
  __typename?: 'ResponseBaseOfBrands';
  result?: Maybe<Brands>;
  status: ResponseStatus;
};

export type ResponseBaseOfClosets = {
  __typename?: 'ResponseBaseOfClosets';
  result?: Maybe<Closets>;
  status: ResponseStatus;
};

export type ResponseBaseOfPosts = {
  __typename?: 'ResponseBaseOfPosts';
  result?: Maybe<Posts>;
  status: ResponseStatus;
};

export type ResponseBaseOfStyleDto = {
  __typename?: 'ResponseBaseOfStyleDto';
  result?: Maybe<StyleDto>;
  status: ResponseStatus;
};

export type ResponseBaseOfUserDto = {
  __typename?: 'ResponseBaseOfUserDto';
  result?: Maybe<UserDto>;
  status: ResponseStatus;
};

export type ResponseBaseOfUsers = {
  __typename?: 'ResponseBaseOfUsers';
  result?: Maybe<Users>;
  status: ResponseStatus;
};

export enum ResponseStatus {
  AlreadyExist = 'ALREADY_EXIST',
  AlreadyFollowed = 'ALREADY_FOLLOWED',
  AlreadyRemoved = 'ALREADY_REMOVED',
  AuthenticationFailed = 'AUTHENTICATION_FAILED',
  CommentNotFound = 'COMMENT_NOT_FOUND',
  DiffrenetIds = 'DIFFRENET_IDS',
  HostNotFound = 'HOST_NOT_FOUND',
  InvalidTimeRange = 'INVALID_TIME_RANGE',
  InvalidTimeSyntax = 'INVALID_TIME_SYNTAX',
  NotAllowed = 'NOT_ALLOWED',
  NotEnoughData = 'NOT_ENOUGH_DATA',
  NotFound = 'NOT_FOUND',
  PostNotFound = 'POST_NOT_FOUND',
  SameId = 'SAME_ID',
  SelfMessageNotAllowed = 'SELF_MESSAGE_NOT_ALLOWED',
  Success = 'SUCCESS',
  TimeConflict = 'TIME_CONFLICT',
  UnknownError = 'UNKNOWN_ERROR',
  UserNotFound = 'USER_NOT_FOUND',
}

export type Sizes = {
  __typename?: 'Sizes';
  id: Scalars['Int'];
  isDeleted: Scalars['Boolean'];
  size?: Maybe<Scalars['String']>;
};

export enum SocialNetworks {
  Facebook = 'FACEBOOK',
  Google = 'GOOGLE',
  Instagram = 'INSTAGRAM',
  Pinterest = 'PINTEREST',
  TikTok = 'TIK_TOK',
}

export type SocialNetworksOperationFilterInput = {
  eq?: InputMaybe<SocialNetworks>;
  in?: InputMaybe<Array<SocialNetworks>>;
  neq?: InputMaybe<SocialNetworks>;
  nin?: InputMaybe<Array<SocialNetworks>>;
};

export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ncontains?: InputMaybe<Scalars['String']>;
  nendsWith?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nstartsWith?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StyleBrands = {
  __typename?: 'StyleBrands';
  brand?: Maybe<Brands>;
  brandId: Scalars['Int'];
  id: Scalars['Int'];
  isDeleted: Scalars['Boolean'];
  style?: Maybe<Styles>;
  styleId: Scalars['Int'];
};

export type StyleBrandsFilterInput = {
  and?: InputMaybe<Array<StyleBrandsFilterInput>>;
  brand?: InputMaybe<BrandsFilterInput>;
  brandId?: InputMaybe<ComparableInt32OperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  or?: InputMaybe<Array<StyleBrandsFilterInput>>;
  style?: InputMaybe<StylesFilterInput>;
  styleId?: InputMaybe<ComparableInt32OperationFilterInput>;
};

export type StyleDto = {
  __typename?: 'StyleDto';
  brands?: Maybe<Array<Maybe<Brands>>>;
  colors?: Maybe<Array<Maybe<Scalars['String']>>>;
  inspos?: Maybe<Array<Maybe<Users>>>;
  liked: Scalars['Boolean'];
  likesCount: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  photos?: Maybe<Array<Maybe<Scalars['String']>>>;
  thumbnail?: Maybe<Scalars['String']>;
};

export type StyleLikes = {
  __typename?: 'StyleLikes';
  id: Scalars['Int'];
  isDeleted: Scalars['Boolean'];
  liked: Scalars['Boolean'];
  style?: Maybe<Styles>;
  styleId: Scalars['Int'];
  user?: Maybe<Users>;
  userId: Scalars['Int'];
};

export type StyleLikesFilterInput = {
  and?: InputMaybe<Array<StyleLikesFilterInput>>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  liked?: InputMaybe<BooleanOperationFilterInput>;
  or?: InputMaybe<Array<StyleLikesFilterInput>>;
  style?: InputMaybe<StylesFilterInput>;
  styleId?: InputMaybe<ComparableInt32OperationFilterInput>;
  user?: InputMaybe<UsersFilterInput>;
  userId?: InputMaybe<ComparableInt32OperationFilterInput>;
};

export type Styles = {
  __typename?: 'Styles';
  colors?: Maybe<Array<Maybe<Scalars['String']>>>;
  id: Scalars['Int'];
  isDeleted: Scalars['Boolean'];
  likesCount: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  photos?: Maybe<Array<Maybe<Scalars['String']>>>;
  posts?: Maybe<Array<Maybe<Posts>>>;
  styleBrands?: Maybe<Array<Maybe<StyleBrands>>>;
  styleLikes?: Maybe<Array<Maybe<StyleLikes>>>;
  thumbnail?: Maybe<Scalars['String']>;
  userStyles?: Maybe<Array<Maybe<UserStyles>>>;
};

export type StylesCollectionSegment = {
  __typename?: 'StylesCollectionSegment';
  items?: Maybe<Array<Maybe<Styles>>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int'];
};

export type StylesFilterInput = {
  and?: InputMaybe<Array<StylesFilterInput>>;
  colors?: InputMaybe<ListStringOperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  likesCount?: InputMaybe<ComparableInt32OperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<StylesFilterInput>>;
  photos?: InputMaybe<ListStringOperationFilterInput>;
  posts?: InputMaybe<ListFilterInputTypeOfPostsFilterInput>;
  styleBrands?: InputMaybe<ListFilterInputTypeOfStyleBrandsFilterInput>;
  styleLikes?: InputMaybe<ListFilterInputTypeOfStyleLikesFilterInput>;
  thumbnail?: InputMaybe<StringOperationFilterInput>;
  userStyles?: InputMaybe<ListFilterInputTypeOfUserStylesFilterInput>;
};

export type StylesSortInput = {
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  likesCount?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  thumbnail?: InputMaybe<SortEnumType>;
};

export type UserBrands = {
  __typename?: 'UserBrands';
  brand?: Maybe<Brands>;
  brandId: Scalars['Int'];
  id: Scalars['Int'];
  isDeleted: Scalars['Boolean'];
  user?: Maybe<Users>;
  userId: Scalars['Int'];
};

export type UserBrandsFilterInput = {
  and?: InputMaybe<Array<UserBrandsFilterInput>>;
  brand?: InputMaybe<BrandsFilterInput>;
  brandId?: InputMaybe<ComparableInt32OperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  or?: InputMaybe<Array<UserBrandsFilterInput>>;
  user?: InputMaybe<UsersFilterInput>;
  userId?: InputMaybe<ComparableInt32OperationFilterInput>;
};

export type UserDto = {
  __typename?: 'UserDto';
  accountType: AccountTypes;
  bio?: Maybe<Scalars['String']>;
  brands?: Maybe<Array<Maybe<Brands>>>;
  closets?: Maybe<Array<Maybe<Closets>>>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  socials?: Maybe<Array<Maybe<UserSocials>>>;
};

export type UserInput = {
  accountType?: InputMaybe<AccountTypes>;
  bio?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  phone?: InputMaybe<Scalars['String']>;
  socials?: InputMaybe<Array<InputMaybe<UserSocialInput>>>;
};

export type UserSocialInput = {
  address?: InputMaybe<Scalars['String']>;
  socialNetworks: SocialNetworks;
};

export type UserSocials = {
  __typename?: 'UserSocials';
  address?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isDeleted: Scalars['Boolean'];
  socialNetworks: SocialNetworks;
  user?: Maybe<Users>;
  userId: Scalars['Int'];
};

export type UserSocialsFilterInput = {
  address?: InputMaybe<StringOperationFilterInput>;
  and?: InputMaybe<Array<UserSocialsFilterInput>>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  or?: InputMaybe<Array<UserSocialsFilterInput>>;
  socialNetworks?: InputMaybe<SocialNetworksOperationFilterInput>;
  user?: InputMaybe<UsersFilterInput>;
  userId?: InputMaybe<ComparableInt32OperationFilterInput>;
};

export type UserStyles = {
  __typename?: 'UserStyles';
  id: Scalars['Int'];
  isDeleted: Scalars['Boolean'];
  style?: Maybe<Styles>;
  styleId: Scalars['Int'];
  user?: Maybe<Users>;
  userId: Scalars['Int'];
};

export type UserStylesFilterInput = {
  and?: InputMaybe<Array<UserStylesFilterInput>>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  or?: InputMaybe<Array<UserStylesFilterInput>>;
  style?: InputMaybe<StylesFilterInput>;
  styleId?: InputMaybe<ComparableInt32OperationFilterInput>;
  user?: InputMaybe<UsersFilterInput>;
  userId?: InputMaybe<ComparableInt32OperationFilterInput>;
};

export type Users = {
  __typename?: 'Users';
  accountType: AccountTypes;
  avatarUrl?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  brandLikes?: Maybe<Array<Maybe<BrandLikes>>>;
  closets?: Maybe<Array<Maybe<Closets>>>;
  email?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isDeleted: Scalars['Boolean'];
  phone?: Maybe<Scalars['String']>;
  postLikes?: Maybe<Array<Maybe<PostLikes>>>;
  socials?: Maybe<Array<Maybe<UserSocials>>>;
  styleLikes?: Maybe<Array<Maybe<StyleLikes>>>;
  userBrands?: Maybe<Array<Maybe<UserBrands>>>;
  userStyles?: Maybe<Array<Maybe<UserStyles>>>;
};

export type UsersCollectionSegment = {
  __typename?: 'UsersCollectionSegment';
  items?: Maybe<Array<Maybe<Users>>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int'];
};

export type UsersFilterInput = {
  accountType?: InputMaybe<AccountTypesOperationFilterInput>;
  and?: InputMaybe<Array<UsersFilterInput>>;
  avatarUrl?: InputMaybe<StringOperationFilterInput>;
  bio?: InputMaybe<StringOperationFilterInput>;
  brandLikes?: InputMaybe<ListFilterInputTypeOfBrandLikesFilterInput>;
  closets?: InputMaybe<ListFilterInputTypeOfClosetsFilterInput>;
  email?: InputMaybe<StringOperationFilterInput>;
  externalId?: InputMaybe<StringOperationFilterInput>;
  fullName?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  or?: InputMaybe<Array<UsersFilterInput>>;
  phone?: InputMaybe<StringOperationFilterInput>;
  postLikes?: InputMaybe<ListFilterInputTypeOfPostLikesFilterInput>;
  socials?: InputMaybe<ListFilterInputTypeOfUserSocialsFilterInput>;
  styleLikes?: InputMaybe<ListFilterInputTypeOfStyleLikesFilterInput>;
  userBrands?: InputMaybe<ListFilterInputTypeOfUserBrandsFilterInput>;
  userStyles?: InputMaybe<ListFilterInputTypeOfUserStylesFilterInput>;
};

export type UsersSortInput = {
  accountType?: InputMaybe<SortEnumType>;
  avatarUrl?: InputMaybe<SortEnumType>;
  bio?: InputMaybe<SortEnumType>;
  email?: InputMaybe<SortEnumType>;
  externalId?: InputMaybe<SortEnumType>;
  fullName?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  phone?: InputMaybe<SortEnumType>;
};

export type Brand_LikeBrandMutationVariables = Exact<{
  brandId: Scalars['Int'];
  liked: Scalars['Boolean'];
}>;

export type Brand_LikeBrandMutation = {
  __typename?: 'Mutation';
  brand_likeBrand?: {
    __typename?: 'ResponseBase';
    status: ResponseStatus;
  } | null;
};

export type Brand_GetAllBrandsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BrandDtoFilterInput>;
  order?: InputMaybe<Array<BrandDtoSortInput> | BrandDtoSortInput>;
}>;

export type Brand_GetAllBrandsQuery = {
  __typename?: 'Query';
  brand_getAllBrands?: {
    __typename?: 'ListResponseBaseOfBrandDto';
    status: ResponseStatus;
    result?: {
      __typename?: 'BrandDtoCollectionSegment';
      totalCount: number;
      items?: Array<{
        __typename?: 'BrandDto';
        sizes?: Array<any | null> | null;
        id: number;
        name?: string | null;
        thumbnail?: string | null;
        likesCount: number;
        photos?: Array<string | null> | null;
        styles?: Array<{
          __typename?: 'Styles';
          name?: string | null;
          thumbnail?: string | null;
          colors?: Array<string | null> | null;
          photos?: Array<string | null> | null;
          likesCount: number;
          id: number;
          isDeleted: boolean;
          styleBrands?: Array<{
            __typename?: 'StyleBrands';
            styleId: number;
            brandId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          posts?: Array<{
            __typename?: 'Posts';
            title?: string | null;
            content?: string | null;
            photo?: string | null;
            brandId?: number | null;
            styleId?: number | null;
            postType: PostTypes;
            sizeTag: number;
            posterId: number;
            postedAt: any;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          userStyles?: Array<{
            __typename?: 'UserStyles';
            userId: number;
            styleId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          styleLikes?: Array<{
            __typename?: 'StyleLikes';
            userId: number;
            styleId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null> | null;
        inspos?: Array<{
          __typename?: 'Users';
          fullName?: string | null;
          accountType: AccountTypes;
          email?: string | null;
          phone?: string | null;
          bio?: string | null;
          externalId?: string | null;
          id: number;
          isDeleted: boolean;
          postLikes?: Array<{
            __typename?: 'PostLikes';
            userId: number;
            postId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          socials?: Array<{
            __typename?: 'UserSocials';
            socialNetworks: SocialNetworks;
            address?: string | null;
            userId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          closets?: Array<{
            __typename?: 'Closets';
            userId: number;
            outfitName?: string | null;
            photo?: string | null;
            createdAt: any;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          userBrands?: Array<{
            __typename?: 'UserBrands';
            userId: number;
            brandId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          brandLikes?: Array<{
            __typename?: 'BrandLikes';
            userId: number;
            brandId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          userStyles?: Array<{
            __typename?: 'UserStyles';
            userId: number;
            styleId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          styleLikes?: Array<{
            __typename?: 'StyleLikes';
            userId: number;
            styleId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null> | null;
      } | null> | null;
      pageInfo: {
        __typename?: 'CollectionSegmentInfo';
        hasNextPage: boolean;
        hasPreviousPage: boolean;
      };
    } | null;
  } | null;
};

export type Brand_GetBrandQueryVariables = Exact<{
  brandId: Scalars['Int'];
}>;

export type Brand_GetBrandQuery = {
  __typename?: 'Query';
  brand_getBrand?: {
    __typename?: 'ResponseBaseOfBrandDto';
    status: ResponseStatus;
    result?: {
      __typename?: 'BrandDto';
      sizes?: Array<any | null> | null;
      id: number;
      name?: string | null;
      thumbnail?: string | null;
      likesCount: number;
      photos?: Array<string | null> | null;
      liked: boolean;
      styles?: Array<{
        __typename?: 'Styles';
        name?: string | null;
        thumbnail?: string | null;
        colors?: Array<string | null> | null;
        photos?: Array<string | null> | null;
        likesCount: number;
        id: number;
        isDeleted: boolean;
        styleBrands?: Array<{
          __typename?: 'StyleBrands';
          styleId: number;
          brandId: number;
          id: number;
          isDeleted: boolean;
          style?: {
            __typename?: 'Styles';
            name?: string | null;
            thumbnail?: string | null;
            colors?: Array<string | null> | null;
            photos?: Array<string | null> | null;
            likesCount: number;
            id: number;
            isDeleted: boolean;
          } | null;
          brand?: {
            __typename?: 'Brands';
            sizes?: Array<any | null> | null;
            name?: string | null;
            thumbnail?: string | null;
            likesCount: number;
            photos?: Array<string | null> | null;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
        posts?: Array<{
          __typename?: 'Posts';
          title?: string | null;
          content?: string | null;
          photo?: string | null;
          brandId?: number | null;
          styleId?: number | null;
          postType: PostTypes;
          sizeTag: number;
          posterId: number;
          postedAt: any;
          id: number;
          isDeleted: boolean;
          brand?: {
            __typename?: 'Brands';
            sizes?: Array<any | null> | null;
            name?: string | null;
            thumbnail?: string | null;
            likesCount: number;
            photos?: Array<string | null> | null;
            id: number;
            isDeleted: boolean;
          } | null;
          style?: {
            __typename?: 'Styles';
            name?: string | null;
            thumbnail?: string | null;
            colors?: Array<string | null> | null;
            photos?: Array<string | null> | null;
            likesCount: number;
            id: number;
            isDeleted: boolean;
          } | null;
          postLikes?: Array<{
            __typename?: 'PostLikes';
            userId: number;
            postId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          poster?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          likes?: Array<{
            __typename?: 'PostLikes';
            userId: number;
            postId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null> | null;
        userStyles?: Array<{
          __typename?: 'UserStyles';
          userId: number;
          styleId: number;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          style?: {
            __typename?: 'Styles';
            name?: string | null;
            thumbnail?: string | null;
            colors?: Array<string | null> | null;
            photos?: Array<string | null> | null;
            likesCount: number;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
        styleLikes?: Array<{
          __typename?: 'StyleLikes';
          userId: number;
          styleId: number;
          liked: boolean;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          style?: {
            __typename?: 'Styles';
            name?: string | null;
            thumbnail?: string | null;
            colors?: Array<string | null> | null;
            photos?: Array<string | null> | null;
            likesCount: number;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
      } | null> | null;
      inspos?: Array<{
        __typename?: 'Users';
        fullName?: string | null;
        accountType: AccountTypes;
        email?: string | null;
        phone?: string | null;
        bio?: string | null;
        externalId?: string | null;
        id: number;
        isDeleted: boolean;
        postLikes?: Array<{
          __typename?: 'PostLikes';
          userId: number;
          postId: number;
          liked: boolean;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          post?: {
            __typename?: 'Posts';
            title?: string | null;
            content?: string | null;
            photo?: string | null;
            brandId?: number | null;
            styleId?: number | null;
            postType: PostTypes;
            sizeTag: number;
            posterId: number;
            postedAt: any;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
        socials?: Array<{
          __typename?: 'UserSocials';
          socialNetworks: SocialNetworks;
          address?: string | null;
          userId: number;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
        closets?: Array<{
          __typename?: 'Closets';
          userId: number;
          outfitName?: string | null;
          photo?: string | null;
          createdAt: any;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          closetItems?: Array<{
            __typename?: 'ClosetItems';
            closetId: number;
            name?: string | null;
            url?: string | null;
            xCoordinate: any;
            yCoordinate: any;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null> | null;
        userBrands?: Array<{
          __typename?: 'UserBrands';
          userId: number;
          brandId: number;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          brand?: {
            __typename?: 'Brands';
            sizes?: Array<any | null> | null;
            name?: string | null;
            thumbnail?: string | null;
            likesCount: number;
            photos?: Array<string | null> | null;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
        brandLikes?: Array<{
          __typename?: 'BrandLikes';
          userId: number;
          brandId: number;
          liked: boolean;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          brand?: {
            __typename?: 'Brands';
            sizes?: Array<any | null> | null;
            name?: string | null;
            thumbnail?: string | null;
            likesCount: number;
            photos?: Array<string | null> | null;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
        userStyles?: Array<{
          __typename?: 'UserStyles';
          userId: number;
          styleId: number;
          id: number;
          isDeleted: boolean;
        } | null> | null;
        styleLikes?: Array<{
          __typename?: 'StyleLikes';
          userId: number;
          styleId: number;
          liked: boolean;
          id: number;
          isDeleted: boolean;
        } | null> | null;
      } | null> | null;
    } | null;
  } | null;
};

export type Brand_GetBrandsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BrandsFilterInput>;
  order?: InputMaybe<Array<BrandsSortInput> | BrandsSortInput>;
  brandIds?: InputMaybe<Array<Scalars['Int']> | Scalars['Int']>;
}>;

export type Brand_GetBrandsQuery = {
  __typename?: 'Query';
  brand_getBrands?: {
    __typename?: 'ListResponseBaseOfBrands';
    status: ResponseStatus;
    result?: {
      __typename?: 'BrandsCollectionSegment';
      totalCount: number;
      items?: Array<{
        __typename?: 'Brands';
        sizes?: Array<any | null> | null;
        name?: string | null;
        thumbnail?: string | null;
        likesCount: number;
        photos?: Array<string | null> | null;
        id: number;
        isDeleted: boolean;
        userBrands?: Array<{
          __typename?: 'UserBrands';
          userId: number;
          brandId: number;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          brand?: {
            __typename?: 'Brands';
            sizes?: Array<any | null> | null;
            name?: string | null;
            thumbnail?: string | null;
            likesCount: number;
            photos?: Array<string | null> | null;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
        brandLikes?: Array<{
          __typename?: 'BrandLikes';
          userId: number;
          brandId: number;
          liked: boolean;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          brand?: {
            __typename?: 'Brands';
            sizes?: Array<any | null> | null;
            name?: string | null;
            thumbnail?: string | null;
            likesCount: number;
            photos?: Array<string | null> | null;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
        posts?: Array<{
          __typename?: 'Posts';
          title?: string | null;
          content?: string | null;
          photo?: string | null;
          brandId?: number | null;
          styleId?: number | null;
          postType: PostTypes;
          sizeTag: number;
          posterId: number;
          postedAt: any;
          id: number;
          isDeleted: boolean;
          brand?: {
            __typename?: 'Brands';
            sizes?: Array<any | null> | null;
            name?: string | null;
            thumbnail?: string | null;
            likesCount: number;
            photos?: Array<string | null> | null;
            id: number;
            isDeleted: boolean;
          } | null;
          style?: {
            __typename?: 'Styles';
            name?: string | null;
            thumbnail?: string | null;
            colors?: Array<string | null> | null;
            photos?: Array<string | null> | null;
            likesCount: number;
            id: number;
            isDeleted: boolean;
          } | null;
          postLikes?: Array<{
            __typename?: 'PostLikes';
            userId: number;
            postId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          poster?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          likes?: Array<{
            __typename?: 'PostLikes';
            userId: number;
            postId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null> | null;
        styleBrands?: Array<{
          __typename?: 'StyleBrands';
          styleId: number;
          brandId: number;
          id: number;
          isDeleted: boolean;
          style?: {
            __typename?: 'Styles';
            name?: string | null;
            thumbnail?: string | null;
            colors?: Array<string | null> | null;
            photos?: Array<string | null> | null;
            likesCount: number;
            id: number;
            isDeleted: boolean;
          } | null;
          brand?: {
            __typename?: 'Brands';
            sizes?: Array<any | null> | null;
            name?: string | null;
            thumbnail?: string | null;
            likesCount: number;
            photos?: Array<string | null> | null;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
      } | null> | null;
      pageInfo: {
        __typename?: 'CollectionSegmentInfo';
        hasNextPage: boolean;
        hasPreviousPage: boolean;
      };
    } | null;
  } | null;
};

export type Brand_RecommendBrandQueryVariables = Exact<{[key: string]: never}>;

export type Brand_RecommendBrandQuery = {
  __typename?: 'Query';
  brand_recommendBrand?: {
    __typename?: 'ResponseBaseOfBrands';
    status: ResponseStatus;
    result?: {
      __typename?: 'Brands';
      sizes?: Array<any | null> | null;
      name?: string | null;
      thumbnail?: string | null;
      likesCount: number;
      photos?: Array<string | null> | null;
      id: number;
      isDeleted: boolean;
      userBrands?: Array<{
        __typename?: 'UserBrands';
        userId: number;
        brandId: number;
        id: number;
        isDeleted: boolean;
        user?: {
          __typename?: 'Users';
          fullName?: string | null;
          accountType: AccountTypes;
          email?: string | null;
          phone?: string | null;
          bio?: string | null;
          externalId?: string | null;
          id: number;
          isDeleted: boolean;
          postLikes?: Array<{
            __typename?: 'PostLikes';
            userId: number;
            postId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          socials?: Array<{
            __typename?: 'UserSocials';
            socialNetworks: SocialNetworks;
            address?: string | null;
            userId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          closets?: Array<{
            __typename?: 'Closets';
            userId: number;
            outfitName?: string | null;
            photo?: string | null;
            createdAt: any;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          userBrands?: Array<{
            __typename?: 'UserBrands';
            userId: number;
            brandId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          brandLikes?: Array<{
            __typename?: 'BrandLikes';
            userId: number;
            brandId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          userStyles?: Array<{
            __typename?: 'UserStyles';
            userId: number;
            styleId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          styleLikes?: Array<{
            __typename?: 'StyleLikes';
            userId: number;
            styleId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null;
        brand?: {
          __typename?: 'Brands';
          sizes?: Array<any | null> | null;
          name?: string | null;
          thumbnail?: string | null;
          likesCount: number;
          photos?: Array<string | null> | null;
          id: number;
          isDeleted: boolean;
          userBrands?: Array<{
            __typename?: 'UserBrands';
            userId: number;
            brandId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          brandLikes?: Array<{
            __typename?: 'BrandLikes';
            userId: number;
            brandId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          posts?: Array<{
            __typename?: 'Posts';
            title?: string | null;
            content?: string | null;
            photo?: string | null;
            brandId?: number | null;
            styleId?: number | null;
            postType: PostTypes;
            sizeTag: number;
            posterId: number;
            postedAt: any;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          styleBrands?: Array<{
            __typename?: 'StyleBrands';
            styleId: number;
            brandId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null;
      } | null> | null;
      brandLikes?: Array<{
        __typename?: 'BrandLikes';
        userId: number;
        brandId: number;
        liked: boolean;
        id: number;
        isDeleted: boolean;
        user?: {
          __typename?: 'Users';
          fullName?: string | null;
          accountType: AccountTypes;
          email?: string | null;
          phone?: string | null;
          bio?: string | null;
          externalId?: string | null;
          id: number;
          isDeleted: boolean;
        } | null;
        brand?: {
          __typename?: 'Brands';
          sizes?: Array<any | null> | null;
          name?: string | null;
          thumbnail?: string | null;
          likesCount: number;
          photos?: Array<string | null> | null;
          id: number;
          isDeleted: boolean;
        } | null;
      } | null> | null;
      posts?: Array<{
        __typename?: 'Posts';
        title?: string | null;
        content?: string | null;
        photo?: string | null;
        brandId?: number | null;
        styleId?: number | null;
        postType: PostTypes;
        sizeTag: number;
        posterId: number;
        postedAt: any;
        id: number;
        isDeleted: boolean;
        brand?: {
          __typename?: 'Brands';
          sizes?: Array<any | null> | null;
          name?: string | null;
          thumbnail?: string | null;
          likesCount: number;
          photos?: Array<string | null> | null;
          id: number;
          isDeleted: boolean;
        } | null;
        style?: {
          __typename?: 'Styles';
          name?: string | null;
          thumbnail?: string | null;
          colors?: Array<string | null> | null;
          photos?: Array<string | null> | null;
          likesCount: number;
          id: number;
          isDeleted: boolean;
          styleBrands?: Array<{
            __typename?: 'StyleBrands';
            styleId: number;
            brandId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          posts?: Array<{
            __typename?: 'Posts';
            title?: string | null;
            content?: string | null;
            photo?: string | null;
            brandId?: number | null;
            styleId?: number | null;
            postType: PostTypes;
            sizeTag: number;
            posterId: number;
            postedAt: any;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          userStyles?: Array<{
            __typename?: 'UserStyles';
            userId: number;
            styleId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          styleLikes?: Array<{
            __typename?: 'StyleLikes';
            userId: number;
            styleId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null;
        postLikes?: Array<{
          __typename?: 'PostLikes';
          userId: number;
          postId: number;
          liked: boolean;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          post?: {
            __typename?: 'Posts';
            title?: string | null;
            content?: string | null;
            photo?: string | null;
            brandId?: number | null;
            styleId?: number | null;
            postType: PostTypes;
            sizeTag: number;
            posterId: number;
            postedAt: any;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
        poster?: {
          __typename?: 'Users';
          fullName?: string | null;
          accountType: AccountTypes;
          email?: string | null;
          phone?: string | null;
          bio?: string | null;
          externalId?: string | null;
          id: number;
          isDeleted: boolean;
          postLikes?: Array<{
            __typename?: 'PostLikes';
            userId: number;
            postId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          socials?: Array<{
            __typename?: 'UserSocials';
            socialNetworks: SocialNetworks;
            address?: string | null;
            userId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          closets?: Array<{
            __typename?: 'Closets';
            userId: number;
            outfitName?: string | null;
            photo?: string | null;
            createdAt: any;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          userBrands?: Array<{
            __typename?: 'UserBrands';
            userId: number;
            brandId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          brandLikes?: Array<{
            __typename?: 'BrandLikes';
            userId: number;
            brandId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          userStyles?: Array<{
            __typename?: 'UserStyles';
            userId: number;
            styleId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          styleLikes?: Array<{
            __typename?: 'StyleLikes';
            userId: number;
            styleId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null;
        likes?: Array<{
          __typename?: 'PostLikes';
          userId: number;
          postId: number;
          liked: boolean;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          post?: {
            __typename?: 'Posts';
            title?: string | null;
            content?: string | null;
            photo?: string | null;
            brandId?: number | null;
            styleId?: number | null;
            postType: PostTypes;
            sizeTag: number;
            posterId: number;
            postedAt: any;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
      } | null> | null;
      styleBrands?: Array<{
        __typename?: 'StyleBrands';
        styleId: number;
        brandId: number;
        id: number;
        isDeleted: boolean;
        style?: {
          __typename?: 'Styles';
          name?: string | null;
          thumbnail?: string | null;
          colors?: Array<string | null> | null;
          photos?: Array<string | null> | null;
          likesCount: number;
          id: number;
          isDeleted: boolean;
        } | null;
        brand?: {
          __typename?: 'Brands';
          sizes?: Array<any | null> | null;
          name?: string | null;
          thumbnail?: string | null;
          likesCount: number;
          photos?: Array<string | null> | null;
          id: number;
          isDeleted: boolean;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};

export type Closet_CreateClosetMutationVariables = Exact<{
  input?: InputMaybe<ClosetInput>;
}>;

export type Closet_CreateClosetMutation = {
  __typename?: 'Mutation';
  closet_createCloset?: {
    __typename?: 'ResponseBaseOfClosets';
    status: ResponseStatus;
    result?: {
      __typename?: 'Closets';
      userId: number;
      outfitName?: string | null;
      photo?: string | null;
      createdAt: any;
      id: number;
      isDeleted: boolean;
      user?: {
        __typename?: 'Users';
        fullName?: string | null;
        accountType: AccountTypes;
        email?: string | null;
        phone?: string | null;
        bio?: string | null;
        externalId?: string | null;
        id: number;
        isDeleted: boolean;
        postLikes?: Array<{
          __typename?: 'PostLikes';
          userId: number;
          postId: number;
          liked: boolean;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          post?: {
            __typename?: 'Posts';
            title?: string | null;
            content?: string | null;
            photo?: string | null;
            brandId?: number | null;
            styleId?: number | null;
            postType: PostTypes;
            sizeTag: number;
            posterId: number;
            postedAt: any;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
        socials?: Array<{
          __typename?: 'UserSocials';
          socialNetworks: SocialNetworks;
          address?: string | null;
          userId: number;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
        closets?: Array<{
          __typename?: 'Closets';
          userId: number;
          outfitName?: string | null;
          photo?: string | null;
          createdAt: any;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          closetItems?: Array<{
            __typename?: 'ClosetItems';
            closetId: number;
            name?: string | null;
            url?: string | null;
            xCoordinate: any;
            yCoordinate: any;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null> | null;
        userBrands?: Array<{
          __typename?: 'UserBrands';
          userId: number;
          brandId: number;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          brand?: {
            __typename?: 'Brands';
            sizes?: Array<any | null> | null;
            name?: string | null;
            thumbnail?: string | null;
            likesCount: number;
            photos?: Array<string | null> | null;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
        brandLikes?: Array<{
          __typename?: 'BrandLikes';
          userId: number;
          brandId: number;
          liked: boolean;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          brand?: {
            __typename?: 'Brands';
            sizes?: Array<any | null> | null;
            name?: string | null;
            thumbnail?: string | null;
            likesCount: number;
            photos?: Array<string | null> | null;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
        userStyles?: Array<{
          __typename?: 'UserStyles';
          userId: number;
          styleId: number;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          style?: {
            __typename?: 'Styles';
            name?: string | null;
            thumbnail?: string | null;
            colors?: Array<string | null> | null;
            photos?: Array<string | null> | null;
            likesCount: number;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
        styleLikes?: Array<{
          __typename?: 'StyleLikes';
          userId: number;
          styleId: number;
          liked: boolean;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          style?: {
            __typename?: 'Styles';
            name?: string | null;
            thumbnail?: string | null;
            colors?: Array<string | null> | null;
            photos?: Array<string | null> | null;
            likesCount: number;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
      } | null;
      closetItems?: Array<{
        __typename?: 'ClosetItems';
        closetId: number;
        name?: string | null;
        url?: string | null;
        xCoordinate: any;
        yCoordinate: any;
        id: number;
        isDeleted: boolean;
        closet?: {
          __typename?: 'Closets';
          userId: number;
          outfitName?: string | null;
          photo?: string | null;
          createdAt: any;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          closetItems?: Array<{
            __typename?: 'ClosetItems';
            closetId: number;
            name?: string | null;
            url?: string | null;
            xCoordinate: any;
            yCoordinate: any;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};

export type Post_CreatePostMutationVariables = Exact<{
  postInput?: InputMaybe<PostInput>;
}>;

export type Post_CreatePostMutation = {
  __typename?: 'Mutation';
  post_createPost?: {
    __typename?: 'ResponseBaseOfPosts';
    status: ResponseStatus;
    result?: {
      __typename?: 'Posts';
      title?: string | null;
      content?: string | null;
      photo?: string | null;
      brandId?: number | null;
      styleId?: number | null;
      postType: PostTypes;
      sizeTag: number;
      posterId: number;
      postedAt: any;
      id: number;
      isDeleted: boolean;
      brand?: {
        __typename?: 'Brands';
        sizes?: Array<any | null> | null;
        name?: string | null;
        thumbnail?: string | null;
        likesCount: number;
        photos?: Array<string | null> | null;
        id: number;
        isDeleted: boolean;
        userBrands?: Array<{
          __typename?: 'UserBrands';
          userId: number;
          brandId: number;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          brand?: {
            __typename?: 'Brands';
            sizes?: Array<any | null> | null;
            name?: string | null;
            thumbnail?: string | null;
            likesCount: number;
            photos?: Array<string | null> | null;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
        brandLikes?: Array<{
          __typename?: 'BrandLikes';
          userId: number;
          brandId: number;
          liked: boolean;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          brand?: {
            __typename?: 'Brands';
            sizes?: Array<any | null> | null;
            name?: string | null;
            thumbnail?: string | null;
            likesCount: number;
            photos?: Array<string | null> | null;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
        posts?: Array<{
          __typename?: 'Posts';
          title?: string | null;
          content?: string | null;
          photo?: string | null;
          brandId?: number | null;
          styleId?: number | null;
          postType: PostTypes;
          sizeTag: number;
          posterId: number;
          postedAt: any;
          id: number;
          isDeleted: boolean;
          brand?: {
            __typename?: 'Brands';
            sizes?: Array<any | null> | null;
            name?: string | null;
            thumbnail?: string | null;
            likesCount: number;
            photos?: Array<string | null> | null;
            id: number;
            isDeleted: boolean;
          } | null;
          style?: {
            __typename?: 'Styles';
            name?: string | null;
            thumbnail?: string | null;
            colors?: Array<string | null> | null;
            photos?: Array<string | null> | null;
            likesCount: number;
            id: number;
            isDeleted: boolean;
          } | null;
          postLikes?: Array<{
            __typename?: 'PostLikes';
            userId: number;
            postId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          poster?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          likes?: Array<{
            __typename?: 'PostLikes';
            userId: number;
            postId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null> | null;
        styleBrands?: Array<{
          __typename?: 'StyleBrands';
          styleId: number;
          brandId: number;
          id: number;
          isDeleted: boolean;
          style?: {
            __typename?: 'Styles';
            name?: string | null;
            thumbnail?: string | null;
            colors?: Array<string | null> | null;
            photos?: Array<string | null> | null;
            likesCount: number;
            id: number;
            isDeleted: boolean;
          } | null;
          brand?: {
            __typename?: 'Brands';
            sizes?: Array<any | null> | null;
            name?: string | null;
            thumbnail?: string | null;
            likesCount: number;
            photos?: Array<string | null> | null;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
      } | null;
      style?: {
        __typename?: 'Styles';
        name?: string | null;
        thumbnail?: string | null;
        colors?: Array<string | null> | null;
        photos?: Array<string | null> | null;
        likesCount: number;
        id: number;
        isDeleted: boolean;
        styleBrands?: Array<{
          __typename?: 'StyleBrands';
          styleId: number;
          brandId: number;
          id: number;
          isDeleted: boolean;
        } | null> | null;
        posts?: Array<{
          __typename?: 'Posts';
          title?: string | null;
          content?: string | null;
          photo?: string | null;
          brandId?: number | null;
          styleId?: number | null;
          postType: PostTypes;
          sizeTag: number;
          posterId: number;
          postedAt: any;
          id: number;
          isDeleted: boolean;
        } | null> | null;
        userStyles?: Array<{
          __typename?: 'UserStyles';
          userId: number;
          styleId: number;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          style?: {
            __typename?: 'Styles';
            name?: string | null;
            thumbnail?: string | null;
            colors?: Array<string | null> | null;
            photos?: Array<string | null> | null;
            likesCount: number;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
        styleLikes?: Array<{
          __typename?: 'StyleLikes';
          userId: number;
          styleId: number;
          liked: boolean;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          style?: {
            __typename?: 'Styles';
            name?: string | null;
            thumbnail?: string | null;
            colors?: Array<string | null> | null;
            photos?: Array<string | null> | null;
            likesCount: number;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
      } | null;
      postLikes?: Array<{
        __typename?: 'PostLikes';
        userId: number;
        postId: number;
        liked: boolean;
        id: number;
        isDeleted: boolean;
        user?: {
          __typename?: 'Users';
          fullName?: string | null;
          accountType: AccountTypes;
          email?: string | null;
          phone?: string | null;
          bio?: string | null;
          externalId?: string | null;
          id: number;
          isDeleted: boolean;
          postLikes?: Array<{
            __typename?: 'PostLikes';
            userId: number;
            postId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          socials?: Array<{
            __typename?: 'UserSocials';
            socialNetworks: SocialNetworks;
            address?: string | null;
            userId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          closets?: Array<{
            __typename?: 'Closets';
            userId: number;
            outfitName?: string | null;
            photo?: string | null;
            createdAt: any;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          userBrands?: Array<{
            __typename?: 'UserBrands';
            userId: number;
            brandId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          brandLikes?: Array<{
            __typename?: 'BrandLikes';
            userId: number;
            brandId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          userStyles?: Array<{
            __typename?: 'UserStyles';
            userId: number;
            styleId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          styleLikes?: Array<{
            __typename?: 'StyleLikes';
            userId: number;
            styleId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null;
        post?: {
          __typename?: 'Posts';
          title?: string | null;
          content?: string | null;
          photo?: string | null;
          brandId?: number | null;
          styleId?: number | null;
          postType: PostTypes;
          sizeTag: number;
          posterId: number;
          postedAt: any;
          id: number;
          isDeleted: boolean;
          brand?: {
            __typename?: 'Brands';
            sizes?: Array<any | null> | null;
            name?: string | null;
            thumbnail?: string | null;
            likesCount: number;
            photos?: Array<string | null> | null;
            id: number;
            isDeleted: boolean;
          } | null;
          style?: {
            __typename?: 'Styles';
            name?: string | null;
            thumbnail?: string | null;
            colors?: Array<string | null> | null;
            photos?: Array<string | null> | null;
            likesCount: number;
            id: number;
            isDeleted: boolean;
          } | null;
          postLikes?: Array<{
            __typename?: 'PostLikes';
            userId: number;
            postId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          poster?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          likes?: Array<{
            __typename?: 'PostLikes';
            userId: number;
            postId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null;
      } | null> | null;
      poster?: {
        __typename?: 'Users';
        fullName?: string | null;
        accountType: AccountTypes;
        email?: string | null;
        phone?: string | null;
        bio?: string | null;
        externalId?: string | null;
        id: number;
        isDeleted: boolean;
        postLikes?: Array<{
          __typename?: 'PostLikes';
          userId: number;
          postId: number;
          liked: boolean;
          id: number;
          isDeleted: boolean;
        } | null> | null;
        socials?: Array<{
          __typename?: 'UserSocials';
          socialNetworks: SocialNetworks;
          address?: string | null;
          userId: number;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
        closets?: Array<{
          __typename?: 'Closets';
          userId: number;
          outfitName?: string | null;
          photo?: string | null;
          createdAt: any;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          closetItems?: Array<{
            __typename?: 'ClosetItems';
            closetId: number;
            name?: string | null;
            url?: string | null;
            xCoordinate: any;
            yCoordinate: any;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null> | null;
        userBrands?: Array<{
          __typename?: 'UserBrands';
          userId: number;
          brandId: number;
          id: number;
          isDeleted: boolean;
        } | null> | null;
        brandLikes?: Array<{
          __typename?: 'BrandLikes';
          userId: number;
          brandId: number;
          liked: boolean;
          id: number;
          isDeleted: boolean;
        } | null> | null;
        userStyles?: Array<{
          __typename?: 'UserStyles';
          userId: number;
          styleId: number;
          id: number;
          isDeleted: boolean;
        } | null> | null;
        styleLikes?: Array<{
          __typename?: 'StyleLikes';
          userId: number;
          styleId: number;
          liked: boolean;
          id: number;
          isDeleted: boolean;
        } | null> | null;
      } | null;
      likes?: Array<{
        __typename?: 'PostLikes';
        userId: number;
        postId: number;
        liked: boolean;
        id: number;
        isDeleted: boolean;
        user?: {
          __typename?: 'Users';
          fullName?: string | null;
          accountType: AccountTypes;
          email?: string | null;
          phone?: string | null;
          bio?: string | null;
          externalId?: string | null;
          id: number;
          isDeleted: boolean;
        } | null;
        post?: {
          __typename?: 'Posts';
          title?: string | null;
          content?: string | null;
          photo?: string | null;
          brandId?: number | null;
          styleId?: number | null;
          postType: PostTypes;
          sizeTag: number;
          posterId: number;
          postedAt: any;
          id: number;
          isDeleted: boolean;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};

export type Post_LikePostMutationVariables = Exact<{
  postId: Scalars['Int'];
  liked: Scalars['Boolean'];
}>;

export type Post_LikePostMutation = {
  __typename?: 'Mutation';
  post_likePost?: {__typename?: 'ResponseBase'; status: ResponseStatus} | null;
};

export type Post_GetBrandPostsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostDtoFilterInput>;
  order?: InputMaybe<Array<PostDtoSortInput> | PostDtoSortInput>;
  brandId: Scalars['Int'];
}>;

export type Post_GetBrandPostsQuery = {
  __typename?: 'Query';
  post_getBrandPosts?: {
    __typename?: 'ListResponseBaseOfPostDto';
    status: ResponseStatus;
    result?: {
      __typename?: 'PostDtoCollectionSegment';
      totalCount: number;
      items?: Array<{
        __typename?: 'PostDto';
        title?: string | null;
        content?: string | null;
        photo?: string | null;
        postType: PostTypes;
        sizeTag: number;
        posterId: number;
        likesCount: number;
        id: number;
        postedAt: any;
        liked: boolean;
        brand?: {
          __typename?: 'Brands';
          sizes?: Array<any | null> | null;
          name?: string | null;
          thumbnail?: string | null;
          likesCount: number;
          photos?: Array<string | null> | null;
          id: number;
          isDeleted: boolean;
          userBrands?: Array<{
            __typename?: 'UserBrands';
            userId: number;
            brandId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          brandLikes?: Array<{
            __typename?: 'BrandLikes';
            userId: number;
            brandId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          posts?: Array<{
            __typename?: 'Posts';
            title?: string | null;
            content?: string | null;
            photo?: string | null;
            brandId?: number | null;
            styleId?: number | null;
            postType: PostTypes;
            sizeTag: number;
            posterId: number;
            postedAt: any;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          styleBrands?: Array<{
            __typename?: 'StyleBrands';
            styleId: number;
            brandId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null;
        style?: {
          __typename?: 'Styles';
          name?: string | null;
          thumbnail?: string | null;
          colors?: Array<string | null> | null;
          photos?: Array<string | null> | null;
          likesCount: number;
          id: number;
          isDeleted: boolean;
          styleBrands?: Array<{
            __typename?: 'StyleBrands';
            styleId: number;
            brandId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          posts?: Array<{
            __typename?: 'Posts';
            title?: string | null;
            content?: string | null;
            photo?: string | null;
            brandId?: number | null;
            styleId?: number | null;
            postType: PostTypes;
            sizeTag: number;
            posterId: number;
            postedAt: any;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          userStyles?: Array<{
            __typename?: 'UserStyles';
            userId: number;
            styleId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          styleLikes?: Array<{
            __typename?: 'StyleLikes';
            userId: number;
            styleId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null;
        poster?: {
          __typename?: 'Users';
          fullName?: string | null;
          accountType: AccountTypes;
          email?: string | null;
          phone?: string | null;
          bio?: string | null;
          externalId?: string | null;
          id: number;
          isDeleted: boolean;
          postLikes?: Array<{
            __typename?: 'PostLikes';
            userId: number;
            postId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          socials?: Array<{
            __typename?: 'UserSocials';
            socialNetworks: SocialNetworks;
            address?: string | null;
            userId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          closets?: Array<{
            __typename?: 'Closets';
            userId: number;
            outfitName?: string | null;
            photo?: string | null;
            createdAt: any;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          userBrands?: Array<{
            __typename?: 'UserBrands';
            userId: number;
            brandId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          brandLikes?: Array<{
            __typename?: 'BrandLikes';
            userId: number;
            brandId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          userStyles?: Array<{
            __typename?: 'UserStyles';
            userId: number;
            styleId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          styleLikes?: Array<{
            __typename?: 'StyleLikes';
            userId: number;
            styleId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null;
      } | null> | null;
      pageInfo: {
        __typename?: 'CollectionSegmentInfo';
        hasNextPage: boolean;
        hasPreviousPage: boolean;
      };
    } | null;
  } | null;
};

export type Post_GetStylePostsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostDtoFilterInput>;
  order?: InputMaybe<Array<PostDtoSortInput> | PostDtoSortInput>;
  styleId: Scalars['Int'];
}>;

export type Post_GetStylePostsQuery = {
  __typename?: 'Query';
  post_getStylePosts?: {
    __typename?: 'ListResponseBaseOfPostDto';
    status: ResponseStatus;
    result?: {
      __typename?: 'PostDtoCollectionSegment';
      totalCount: number;
      items?: Array<{
        __typename?: 'PostDto';
        title?: string | null;
        content?: string | null;
        photo?: string | null;
        postType: PostTypes;
        sizeTag: number;
        posterId: number;
        likesCount: number;
        id: number;
        postedAt: any;
        liked: boolean;
        brand?: {
          __typename?: 'Brands';
          sizes?: Array<any | null> | null;
          name?: string | null;
          thumbnail?: string | null;
          likesCount: number;
          photos?: Array<string | null> | null;
          id: number;
          isDeleted: boolean;
          userBrands?: Array<{
            __typename?: 'UserBrands';
            userId: number;
            brandId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          brandLikes?: Array<{
            __typename?: 'BrandLikes';
            userId: number;
            brandId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          posts?: Array<{
            __typename?: 'Posts';
            title?: string | null;
            content?: string | null;
            photo?: string | null;
            brandId?: number | null;
            styleId?: number | null;
            postType: PostTypes;
            sizeTag: number;
            posterId: number;
            postedAt: any;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          styleBrands?: Array<{
            __typename?: 'StyleBrands';
            styleId: number;
            brandId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null;
        style?: {
          __typename?: 'Styles';
          name?: string | null;
          thumbnail?: string | null;
          colors?: Array<string | null> | null;
          photos?: Array<string | null> | null;
          likesCount: number;
          id: number;
          isDeleted: boolean;
          styleBrands?: Array<{
            __typename?: 'StyleBrands';
            styleId: number;
            brandId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          posts?: Array<{
            __typename?: 'Posts';
            title?: string | null;
            content?: string | null;
            photo?: string | null;
            brandId?: number | null;
            styleId?: number | null;
            postType: PostTypes;
            sizeTag: number;
            posterId: number;
            postedAt: any;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          userStyles?: Array<{
            __typename?: 'UserStyles';
            userId: number;
            styleId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          styleLikes?: Array<{
            __typename?: 'StyleLikes';
            userId: number;
            styleId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null;
        poster?: {
          __typename?: 'Users';
          fullName?: string | null;
          accountType: AccountTypes;
          email?: string | null;
          phone?: string | null;
          bio?: string | null;
          externalId?: string | null;
          id: number;
          isDeleted: boolean;
          postLikes?: Array<{
            __typename?: 'PostLikes';
            userId: number;
            postId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          socials?: Array<{
            __typename?: 'UserSocials';
            socialNetworks: SocialNetworks;
            address?: string | null;
            userId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          closets?: Array<{
            __typename?: 'Closets';
            userId: number;
            outfitName?: string | null;
            photo?: string | null;
            createdAt: any;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          userBrands?: Array<{
            __typename?: 'UserBrands';
            userId: number;
            brandId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          brandLikes?: Array<{
            __typename?: 'BrandLikes';
            userId: number;
            brandId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          userStyles?: Array<{
            __typename?: 'UserStyles';
            userId: number;
            styleId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          styleLikes?: Array<{
            __typename?: 'StyleLikes';
            userId: number;
            styleId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null;
      } | null> | null;
      pageInfo: {
        __typename?: 'CollectionSegmentInfo';
        hasNextPage: boolean;
        hasPreviousPage: boolean;
      };
    } | null;
  } | null;
};

export type Post_GetUserPostsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PostDtoFilterInput>;
  order?: InputMaybe<Array<PostDtoSortInput> | PostDtoSortInput>;
}>;

export type Post_GetUserPostsQuery = {
  __typename?: 'Query';
  post_getUserPosts?: {
    __typename?: 'ListResponseBaseOfPostDto';
    status: ResponseStatus;
    result?: {
      __typename?: 'PostDtoCollectionSegment';
      totalCount: number;
      items?: Array<{
        __typename?: 'PostDto';
        title?: string | null;
        content?: string | null;
        photo?: string | null;
        postType: PostTypes;
        sizeTag: number;
        posterId: number;
        likesCount: number;
        id: number;
        postedAt: any;
        liked: boolean;
        brand?: {
          __typename?: 'Brands';
          sizes?: Array<any | null> | null;
          name?: string | null;
          thumbnail?: string | null;
          likesCount: number;
          photos?: Array<string | null> | null;
          id: number;
          isDeleted: boolean;
          userBrands?: Array<{
            __typename?: 'UserBrands';
            userId: number;
            brandId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          brandLikes?: Array<{
            __typename?: 'BrandLikes';
            userId: number;
            brandId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          posts?: Array<{
            __typename?: 'Posts';
            title?: string | null;
            content?: string | null;
            photo?: string | null;
            brandId?: number | null;
            styleId?: number | null;
            postType: PostTypes;
            sizeTag: number;
            posterId: number;
            postedAt: any;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          styleBrands?: Array<{
            __typename?: 'StyleBrands';
            styleId: number;
            brandId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null;
        style?: {
          __typename?: 'Styles';
          name?: string | null;
          thumbnail?: string | null;
          colors?: Array<string | null> | null;
          photos?: Array<string | null> | null;
          likesCount: number;
          id: number;
          isDeleted: boolean;
          styleBrands?: Array<{
            __typename?: 'StyleBrands';
            styleId: number;
            brandId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          posts?: Array<{
            __typename?: 'Posts';
            title?: string | null;
            content?: string | null;
            photo?: string | null;
            brandId?: number | null;
            styleId?: number | null;
            postType: PostTypes;
            sizeTag: number;
            posterId: number;
            postedAt: any;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          userStyles?: Array<{
            __typename?: 'UserStyles';
            userId: number;
            styleId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          styleLikes?: Array<{
            __typename?: 'StyleLikes';
            userId: number;
            styleId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null;
        poster?: {
          __typename?: 'Users';
          fullName?: string | null;
          accountType: AccountTypes;
          email?: string | null;
          phone?: string | null;
          bio?: string | null;
          externalId?: string | null;
          id: number;
          isDeleted: boolean;
          postLikes?: Array<{
            __typename?: 'PostLikes';
            userId: number;
            postId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          socials?: Array<{
            __typename?: 'UserSocials';
            socialNetworks: SocialNetworks;
            address?: string | null;
            userId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          closets?: Array<{
            __typename?: 'Closets';
            userId: number;
            outfitName?: string | null;
            photo?: string | null;
            createdAt: any;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          userBrands?: Array<{
            __typename?: 'UserBrands';
            userId: number;
            brandId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          brandLikes?: Array<{
            __typename?: 'BrandLikes';
            userId: number;
            brandId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          userStyles?: Array<{
            __typename?: 'UserStyles';
            userId: number;
            styleId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          styleLikes?: Array<{
            __typename?: 'StyleLikes';
            userId: number;
            styleId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null;
      } | null> | null;
      pageInfo: {
        __typename?: 'CollectionSegmentInfo';
        hasNextPage: boolean;
        hasPreviousPage: boolean;
      };
    } | null;
  } | null;
};

export type Style_LikeStyleMutationVariables = Exact<{
  styleId: Scalars['Int'];
  liked: Scalars['Boolean'];
}>;

export type Style_LikeStyleMutation = {
  __typename?: 'Mutation';
  style_likeStyle?: {
    __typename?: 'ResponseBase';
    status: ResponseStatus;
  } | null;
};

export type Styles_GetStyleQueryVariables = Exact<{
  styleId: Scalars['Int'];
}>;

export type Styles_GetStyleQuery = {
  __typename?: 'Query';
  styles_getStyle?: {
    __typename?: 'ResponseBaseOfStyleDto';
    status: ResponseStatus;
    result?: {
      __typename?: 'StyleDto';
      name?: string | null;
      thumbnail?: string | null;
      colors?: Array<string | null> | null;
      photos?: Array<string | null> | null;
      likesCount: number;
      liked: boolean;
      inspos?: Array<{
        __typename?: 'Users';
        fullName?: string | null;
        accountType: AccountTypes;
        email?: string | null;
        phone?: string | null;
        bio?: string | null;
        externalId?: string | null;
        id: number;
        isDeleted: boolean;
        postLikes?: Array<{
          __typename?: 'PostLikes';
          userId: number;
          postId: number;
          liked: boolean;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          post?: {
            __typename?: 'Posts';
            title?: string | null;
            content?: string | null;
            photo?: string | null;
            brandId?: number | null;
            styleId?: number | null;
            postType: PostTypes;
            sizeTag: number;
            posterId: number;
            postedAt: any;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
        socials?: Array<{
          __typename?: 'UserSocials';
          socialNetworks: SocialNetworks;
          address?: string | null;
          userId: number;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
        closets?: Array<{
          __typename?: 'Closets';
          userId: number;
          outfitName?: string | null;
          photo?: string | null;
          createdAt: any;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          closetItems?: Array<{
            __typename?: 'ClosetItems';
            closetId: number;
            name?: string | null;
            url?: string | null;
            xCoordinate: any;
            yCoordinate: any;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null> | null;
        userBrands?: Array<{
          __typename?: 'UserBrands';
          userId: number;
          brandId: number;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          brand?: {
            __typename?: 'Brands';
            sizes?: Array<any | null> | null;
            name?: string | null;
            thumbnail?: string | null;
            likesCount: number;
            photos?: Array<string | null> | null;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
        brandLikes?: Array<{
          __typename?: 'BrandLikes';
          userId: number;
          brandId: number;
          liked: boolean;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          brand?: {
            __typename?: 'Brands';
            sizes?: Array<any | null> | null;
            name?: string | null;
            thumbnail?: string | null;
            likesCount: number;
            photos?: Array<string | null> | null;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
        userStyles?: Array<{
          __typename?: 'UserStyles';
          userId: number;
          styleId: number;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          style?: {
            __typename?: 'Styles';
            name?: string | null;
            thumbnail?: string | null;
            colors?: Array<string | null> | null;
            photos?: Array<string | null> | null;
            likesCount: number;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
        styleLikes?: Array<{
          __typename?: 'StyleLikes';
          userId: number;
          styleId: number;
          liked: boolean;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          style?: {
            __typename?: 'Styles';
            name?: string | null;
            thumbnail?: string | null;
            colors?: Array<string | null> | null;
            photos?: Array<string | null> | null;
            likesCount: number;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
      } | null> | null;
      brands?: Array<{
        __typename?: 'Brands';
        sizes?: Array<any | null> | null;
        name?: string | null;
        thumbnail?: string | null;
        likesCount: number;
        photos?: Array<string | null> | null;
        id: number;
        isDeleted: boolean;
        userBrands?: Array<{
          __typename?: 'UserBrands';
          userId: number;
          brandId: number;
          id: number;
          isDeleted: boolean;
        } | null> | null;
        brandLikes?: Array<{
          __typename?: 'BrandLikes';
          userId: number;
          brandId: number;
          liked: boolean;
          id: number;
          isDeleted: boolean;
        } | null> | null;
        posts?: Array<{
          __typename?: 'Posts';
          title?: string | null;
          content?: string | null;
          photo?: string | null;
          brandId?: number | null;
          styleId?: number | null;
          postType: PostTypes;
          sizeTag: number;
          posterId: number;
          postedAt: any;
          id: number;
          isDeleted: boolean;
          brand?: {
            __typename?: 'Brands';
            sizes?: Array<any | null> | null;
            name?: string | null;
            thumbnail?: string | null;
            likesCount: number;
            photos?: Array<string | null> | null;
            id: number;
            isDeleted: boolean;
          } | null;
          style?: {
            __typename?: 'Styles';
            name?: string | null;
            thumbnail?: string | null;
            colors?: Array<string | null> | null;
            photos?: Array<string | null> | null;
            likesCount: number;
            id: number;
            isDeleted: boolean;
          } | null;
          postLikes?: Array<{
            __typename?: 'PostLikes';
            userId: number;
            postId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          poster?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          likes?: Array<{
            __typename?: 'PostLikes';
            userId: number;
            postId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null> | null;
        styleBrands?: Array<{
          __typename?: 'StyleBrands';
          styleId: number;
          brandId: number;
          id: number;
          isDeleted: boolean;
          style?: {
            __typename?: 'Styles';
            name?: string | null;
            thumbnail?: string | null;
            colors?: Array<string | null> | null;
            photos?: Array<string | null> | null;
            likesCount: number;
            id: number;
            isDeleted: boolean;
          } | null;
          brand?: {
            __typename?: 'Brands';
            sizes?: Array<any | null> | null;
            name?: string | null;
            thumbnail?: string | null;
            likesCount: number;
            photos?: Array<string | null> | null;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
      } | null> | null;
    } | null;
  } | null;
};

export type Styles_GetStylesQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StylesFilterInput>;
  order?: InputMaybe<Array<StylesSortInput> | StylesSortInput>;
}>;

export type Styles_GetStylesQuery = {
  __typename?: 'Query';
  styles_getStyles?: {
    __typename?: 'ListResponseBaseOfStyles';
    status: ResponseStatus;
    result?: {
      __typename?: 'StylesCollectionSegment';
      totalCount: number;
      items?: Array<{
        __typename?: 'Styles';
        name?: string | null;
        thumbnail?: string | null;
        colors?: Array<string | null> | null;
        photos?: Array<string | null> | null;
        likesCount: number;
        id: number;
        isDeleted: boolean;
        styleBrands?: Array<{
          __typename?: 'StyleBrands';
          styleId: number;
          brandId: number;
          id: number;
          isDeleted: boolean;
          style?: {
            __typename?: 'Styles';
            name?: string | null;
            thumbnail?: string | null;
            colors?: Array<string | null> | null;
            photos?: Array<string | null> | null;
            likesCount: number;
            id: number;
            isDeleted: boolean;
          } | null;
          brand?: {
            __typename?: 'Brands';
            sizes?: Array<any | null> | null;
            name?: string | null;
            thumbnail?: string | null;
            likesCount: number;
            photos?: Array<string | null> | null;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
        posts?: Array<{
          __typename?: 'Posts';
          title?: string | null;
          content?: string | null;
          photo?: string | null;
          brandId?: number | null;
          styleId?: number | null;
          postType: PostTypes;
          sizeTag: number;
          posterId: number;
          postedAt: any;
          id: number;
          isDeleted: boolean;
          brand?: {
            __typename?: 'Brands';
            sizes?: Array<any | null> | null;
            name?: string | null;
            thumbnail?: string | null;
            likesCount: number;
            photos?: Array<string | null> | null;
            id: number;
            isDeleted: boolean;
          } | null;
          style?: {
            __typename?: 'Styles';
            name?: string | null;
            thumbnail?: string | null;
            colors?: Array<string | null> | null;
            photos?: Array<string | null> | null;
            likesCount: number;
            id: number;
            isDeleted: boolean;
          } | null;
          postLikes?: Array<{
            __typename?: 'PostLikes';
            userId: number;
            postId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          poster?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          likes?: Array<{
            __typename?: 'PostLikes';
            userId: number;
            postId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null> | null;
        userStyles?: Array<{
          __typename?: 'UserStyles';
          userId: number;
          styleId: number;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          style?: {
            __typename?: 'Styles';
            name?: string | null;
            thumbnail?: string | null;
            colors?: Array<string | null> | null;
            photos?: Array<string | null> | null;
            likesCount: number;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
        styleLikes?: Array<{
          __typename?: 'StyleLikes';
          userId: number;
          styleId: number;
          liked: boolean;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          style?: {
            __typename?: 'Styles';
            name?: string | null;
            thumbnail?: string | null;
            colors?: Array<string | null> | null;
            photos?: Array<string | null> | null;
            likesCount: number;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
      } | null> | null;
      pageInfo: {
        __typename?: 'CollectionSegmentInfo';
        hasNextPage: boolean;
        hasPreviousPage: boolean;
      };
    } | null;
  } | null;
};

export type User_SetBrandsMutationVariables = Exact<{
  brandIds?: InputMaybe<Array<Scalars['Int']> | Scalars['Int']>;
}>;

export type User_SetBrandsMutation = {
  __typename?: 'Mutation';
  user_setBrands?: {__typename?: 'ResponseBase'; status: ResponseStatus} | null;
};

export type User_SetStylesMutationVariables = Exact<{
  styleIds?: InputMaybe<Array<Scalars['Int']> | Scalars['Int']>;
}>;

export type User_SetStylesMutation = {
  __typename?: 'Mutation';
  user_setStyles?: {__typename?: 'ResponseBase'; status: ResponseStatus} | null;
};

export type User_SignUpMutationVariables = Exact<{[key: string]: never}>;

export type User_SignUpMutation = {
  __typename?: 'Mutation';
  user_signUp?: {
    __typename?: 'ResponseBaseOfUsers';
    status: ResponseStatus;
    result?: {
      __typename?: 'Users';
      fullName?: string | null;
      accountType: AccountTypes;
      email?: string | null;
      phone?: string | null;
      bio?: string | null;
      externalId?: string | null;
      id: number;
      isDeleted: boolean;
      postLikes?: Array<{
        __typename?: 'PostLikes';
        userId: number;
        postId: number;
        liked: boolean;
        id: number;
        isDeleted: boolean;
        user?: {
          __typename?: 'Users';
          fullName?: string | null;
          accountType: AccountTypes;
          email?: string | null;
          phone?: string | null;
          bio?: string | null;
          externalId?: string | null;
          id: number;
          isDeleted: boolean;
          postLikes?: Array<{
            __typename?: 'PostLikes';
            userId: number;
            postId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          socials?: Array<{
            __typename?: 'UserSocials';
            socialNetworks: SocialNetworks;
            address?: string | null;
            userId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          closets?: Array<{
            __typename?: 'Closets';
            userId: number;
            outfitName?: string | null;
            photo?: string | null;
            createdAt: any;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          userBrands?: Array<{
            __typename?: 'UserBrands';
            userId: number;
            brandId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          brandLikes?: Array<{
            __typename?: 'BrandLikes';
            userId: number;
            brandId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          userStyles?: Array<{
            __typename?: 'UserStyles';
            userId: number;
            styleId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          styleLikes?: Array<{
            __typename?: 'StyleLikes';
            userId: number;
            styleId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null;
        post?: {
          __typename?: 'Posts';
          title?: string | null;
          content?: string | null;
          photo?: string | null;
          brandId?: number | null;
          styleId?: number | null;
          postType: PostTypes;
          sizeTag: number;
          posterId: number;
          postedAt: any;
          id: number;
          isDeleted: boolean;
          brand?: {
            __typename?: 'Brands';
            sizes?: Array<any | null> | null;
            name?: string | null;
            thumbnail?: string | null;
            likesCount: number;
            photos?: Array<string | null> | null;
            id: number;
            isDeleted: boolean;
          } | null;
          style?: {
            __typename?: 'Styles';
            name?: string | null;
            thumbnail?: string | null;
            colors?: Array<string | null> | null;
            photos?: Array<string | null> | null;
            likesCount: number;
            id: number;
            isDeleted: boolean;
          } | null;
          postLikes?: Array<{
            __typename?: 'PostLikes';
            userId: number;
            postId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          poster?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          likes?: Array<{
            __typename?: 'PostLikes';
            userId: number;
            postId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null;
      } | null> | null;
      socials?: Array<{
        __typename?: 'UserSocials';
        socialNetworks: SocialNetworks;
        address?: string | null;
        userId: number;
        id: number;
        isDeleted: boolean;
        user?: {
          __typename?: 'Users';
          fullName?: string | null;
          accountType: AccountTypes;
          email?: string | null;
          phone?: string | null;
          bio?: string | null;
          externalId?: string | null;
          id: number;
          isDeleted: boolean;
        } | null;
      } | null> | null;
      closets?: Array<{
        __typename?: 'Closets';
        userId: number;
        outfitName?: string | null;
        photo?: string | null;
        createdAt: any;
        id: number;
        isDeleted: boolean;
        user?: {
          __typename?: 'Users';
          fullName?: string | null;
          accountType: AccountTypes;
          email?: string | null;
          phone?: string | null;
          bio?: string | null;
          externalId?: string | null;
          id: number;
          isDeleted: boolean;
        } | null;
        closetItems?: Array<{
          __typename?: 'ClosetItems';
          closetId: number;
          name?: string | null;
          url?: string | null;
          xCoordinate: any;
          yCoordinate: any;
          id: number;
          isDeleted: boolean;
          closet?: {
            __typename?: 'Closets';
            userId: number;
            outfitName?: string | null;
            photo?: string | null;
            createdAt: any;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
      } | null> | null;
      userBrands?: Array<{
        __typename?: 'UserBrands';
        userId: number;
        brandId: number;
        id: number;
        isDeleted: boolean;
        user?: {
          __typename?: 'Users';
          fullName?: string | null;
          accountType: AccountTypes;
          email?: string | null;
          phone?: string | null;
          bio?: string | null;
          externalId?: string | null;
          id: number;
          isDeleted: boolean;
        } | null;
        brand?: {
          __typename?: 'Brands';
          sizes?: Array<any | null> | null;
          name?: string | null;
          thumbnail?: string | null;
          likesCount: number;
          photos?: Array<string | null> | null;
          id: number;
          isDeleted: boolean;
          userBrands?: Array<{
            __typename?: 'UserBrands';
            userId: number;
            brandId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          brandLikes?: Array<{
            __typename?: 'BrandLikes';
            userId: number;
            brandId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          posts?: Array<{
            __typename?: 'Posts';
            title?: string | null;
            content?: string | null;
            photo?: string | null;
            brandId?: number | null;
            styleId?: number | null;
            postType: PostTypes;
            sizeTag: number;
            posterId: number;
            postedAt: any;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          styleBrands?: Array<{
            __typename?: 'StyleBrands';
            styleId: number;
            brandId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null;
      } | null> | null;
      brandLikes?: Array<{
        __typename?: 'BrandLikes';
        userId: number;
        brandId: number;
        liked: boolean;
        id: number;
        isDeleted: boolean;
        user?: {
          __typename?: 'Users';
          fullName?: string | null;
          accountType: AccountTypes;
          email?: string | null;
          phone?: string | null;
          bio?: string | null;
          externalId?: string | null;
          id: number;
          isDeleted: boolean;
        } | null;
        brand?: {
          __typename?: 'Brands';
          sizes?: Array<any | null> | null;
          name?: string | null;
          thumbnail?: string | null;
          likesCount: number;
          photos?: Array<string | null> | null;
          id: number;
          isDeleted: boolean;
        } | null;
      } | null> | null;
      userStyles?: Array<{
        __typename?: 'UserStyles';
        userId: number;
        styleId: number;
        id: number;
        isDeleted: boolean;
        user?: {
          __typename?: 'Users';
          fullName?: string | null;
          accountType: AccountTypes;
          email?: string | null;
          phone?: string | null;
          bio?: string | null;
          externalId?: string | null;
          id: number;
          isDeleted: boolean;
        } | null;
        style?: {
          __typename?: 'Styles';
          name?: string | null;
          thumbnail?: string | null;
          colors?: Array<string | null> | null;
          photos?: Array<string | null> | null;
          likesCount: number;
          id: number;
          isDeleted: boolean;
          styleBrands?: Array<{
            __typename?: 'StyleBrands';
            styleId: number;
            brandId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          posts?: Array<{
            __typename?: 'Posts';
            title?: string | null;
            content?: string | null;
            photo?: string | null;
            brandId?: number | null;
            styleId?: number | null;
            postType: PostTypes;
            sizeTag: number;
            posterId: number;
            postedAt: any;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          userStyles?: Array<{
            __typename?: 'UserStyles';
            userId: number;
            styleId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          styleLikes?: Array<{
            __typename?: 'StyleLikes';
            userId: number;
            styleId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null;
      } | null> | null;
      styleLikes?: Array<{
        __typename?: 'StyleLikes';
        userId: number;
        styleId: number;
        liked: boolean;
        id: number;
        isDeleted: boolean;
        user?: {
          __typename?: 'Users';
          fullName?: string | null;
          accountType: AccountTypes;
          email?: string | null;
          phone?: string | null;
          bio?: string | null;
          externalId?: string | null;
          id: number;
          isDeleted: boolean;
        } | null;
        style?: {
          __typename?: 'Styles';
          name?: string | null;
          thumbnail?: string | null;
          colors?: Array<string | null> | null;
          photos?: Array<string | null> | null;
          likesCount: number;
          id: number;
          isDeleted: boolean;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};

export type User_UpdateUserMutationVariables = Exact<{
  input?: InputMaybe<UserInput>;
}>;

export type User_UpdateUserMutation = {
  __typename?: 'Mutation';
  user_updateUser?: {
    __typename?: 'ResponseBaseOfUsers';
    status: ResponseStatus;
    result?: {
      __typename?: 'Users';
      fullName?: string | null;
      accountType: AccountTypes;
      email?: string | null;
      phone?: string | null;
      bio?: string | null;
      externalId?: string | null;
      id: number;
      isDeleted: boolean;
      postLikes?: Array<{
        __typename?: 'PostLikes';
        userId: number;
        postId: number;
        liked: boolean;
        id: number;
        isDeleted: boolean;
        user?: {
          __typename?: 'Users';
          fullName?: string | null;
          accountType: AccountTypes;
          email?: string | null;
          phone?: string | null;
          bio?: string | null;
          externalId?: string | null;
          id: number;
          isDeleted: boolean;
          postLikes?: Array<{
            __typename?: 'PostLikes';
            userId: number;
            postId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          socials?: Array<{
            __typename?: 'UserSocials';
            socialNetworks: SocialNetworks;
            address?: string | null;
            userId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          closets?: Array<{
            __typename?: 'Closets';
            userId: number;
            outfitName?: string | null;
            photo?: string | null;
            createdAt: any;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          userBrands?: Array<{
            __typename?: 'UserBrands';
            userId: number;
            brandId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          brandLikes?: Array<{
            __typename?: 'BrandLikes';
            userId: number;
            brandId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          userStyles?: Array<{
            __typename?: 'UserStyles';
            userId: number;
            styleId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          styleLikes?: Array<{
            __typename?: 'StyleLikes';
            userId: number;
            styleId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null;
        post?: {
          __typename?: 'Posts';
          title?: string | null;
          content?: string | null;
          photo?: string | null;
          brandId?: number | null;
          styleId?: number | null;
          postType: PostTypes;
          sizeTag: number;
          posterId: number;
          postedAt: any;
          id: number;
          isDeleted: boolean;
          brand?: {
            __typename?: 'Brands';
            sizes?: Array<any | null> | null;
            name?: string | null;
            thumbnail?: string | null;
            likesCount: number;
            photos?: Array<string | null> | null;
            id: number;
            isDeleted: boolean;
          } | null;
          style?: {
            __typename?: 'Styles';
            name?: string | null;
            thumbnail?: string | null;
            colors?: Array<string | null> | null;
            photos?: Array<string | null> | null;
            likesCount: number;
            id: number;
            isDeleted: boolean;
          } | null;
          postLikes?: Array<{
            __typename?: 'PostLikes';
            userId: number;
            postId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          poster?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          likes?: Array<{
            __typename?: 'PostLikes';
            userId: number;
            postId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null;
      } | null> | null;
      socials?: Array<{
        __typename?: 'UserSocials';
        socialNetworks: SocialNetworks;
        address?: string | null;
        userId: number;
        id: number;
        isDeleted: boolean;
        user?: {
          __typename?: 'Users';
          fullName?: string | null;
          accountType: AccountTypes;
          email?: string | null;
          phone?: string | null;
          bio?: string | null;
          externalId?: string | null;
          id: number;
          isDeleted: boolean;
        } | null;
      } | null> | null;
      closets?: Array<{
        __typename?: 'Closets';
        userId: number;
        outfitName?: string | null;
        photo?: string | null;
        createdAt: any;
        id: number;
        isDeleted: boolean;
        user?: {
          __typename?: 'Users';
          fullName?: string | null;
          accountType: AccountTypes;
          email?: string | null;
          phone?: string | null;
          bio?: string | null;
          externalId?: string | null;
          id: number;
          isDeleted: boolean;
        } | null;
        closetItems?: Array<{
          __typename?: 'ClosetItems';
          closetId: number;
          name?: string | null;
          url?: string | null;
          xCoordinate: any;
          yCoordinate: any;
          id: number;
          isDeleted: boolean;
          closet?: {
            __typename?: 'Closets';
            userId: number;
            outfitName?: string | null;
            photo?: string | null;
            createdAt: any;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
      } | null> | null;
      userBrands?: Array<{
        __typename?: 'UserBrands';
        userId: number;
        brandId: number;
        id: number;
        isDeleted: boolean;
        user?: {
          __typename?: 'Users';
          fullName?: string | null;
          accountType: AccountTypes;
          email?: string | null;
          phone?: string | null;
          bio?: string | null;
          externalId?: string | null;
          id: number;
          isDeleted: boolean;
        } | null;
        brand?: {
          __typename?: 'Brands';
          sizes?: Array<any | null> | null;
          name?: string | null;
          thumbnail?: string | null;
          likesCount: number;
          photos?: Array<string | null> | null;
          id: number;
          isDeleted: boolean;
          userBrands?: Array<{
            __typename?: 'UserBrands';
            userId: number;
            brandId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          brandLikes?: Array<{
            __typename?: 'BrandLikes';
            userId: number;
            brandId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          posts?: Array<{
            __typename?: 'Posts';
            title?: string | null;
            content?: string | null;
            photo?: string | null;
            brandId?: number | null;
            styleId?: number | null;
            postType: PostTypes;
            sizeTag: number;
            posterId: number;
            postedAt: any;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          styleBrands?: Array<{
            __typename?: 'StyleBrands';
            styleId: number;
            brandId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null;
      } | null> | null;
      brandLikes?: Array<{
        __typename?: 'BrandLikes';
        userId: number;
        brandId: number;
        liked: boolean;
        id: number;
        isDeleted: boolean;
        user?: {
          __typename?: 'Users';
          fullName?: string | null;
          accountType: AccountTypes;
          email?: string | null;
          phone?: string | null;
          bio?: string | null;
          externalId?: string | null;
          id: number;
          isDeleted: boolean;
        } | null;
        brand?: {
          __typename?: 'Brands';
          sizes?: Array<any | null> | null;
          name?: string | null;
          thumbnail?: string | null;
          likesCount: number;
          photos?: Array<string | null> | null;
          id: number;
          isDeleted: boolean;
        } | null;
      } | null> | null;
      userStyles?: Array<{
        __typename?: 'UserStyles';
        userId: number;
        styleId: number;
        id: number;
        isDeleted: boolean;
        user?: {
          __typename?: 'Users';
          fullName?: string | null;
          accountType: AccountTypes;
          email?: string | null;
          phone?: string | null;
          bio?: string | null;
          externalId?: string | null;
          id: number;
          isDeleted: boolean;
        } | null;
        style?: {
          __typename?: 'Styles';
          name?: string | null;
          thumbnail?: string | null;
          colors?: Array<string | null> | null;
          photos?: Array<string | null> | null;
          likesCount: number;
          id: number;
          isDeleted: boolean;
          styleBrands?: Array<{
            __typename?: 'StyleBrands';
            styleId: number;
            brandId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          posts?: Array<{
            __typename?: 'Posts';
            title?: string | null;
            content?: string | null;
            photo?: string | null;
            brandId?: number | null;
            styleId?: number | null;
            postType: PostTypes;
            sizeTag: number;
            posterId: number;
            postedAt: any;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          userStyles?: Array<{
            __typename?: 'UserStyles';
            userId: number;
            styleId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          styleLikes?: Array<{
            __typename?: 'StyleLikes';
            userId: number;
            styleId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null;
      } | null> | null;
      styleLikes?: Array<{
        __typename?: 'StyleLikes';
        userId: number;
        styleId: number;
        liked: boolean;
        id: number;
        isDeleted: boolean;
        user?: {
          __typename?: 'Users';
          fullName?: string | null;
          accountType: AccountTypes;
          email?: string | null;
          phone?: string | null;
          bio?: string | null;
          externalId?: string | null;
          id: number;
          isDeleted: boolean;
        } | null;
        style?: {
          __typename?: 'Styles';
          name?: string | null;
          thumbnail?: string | null;
          colors?: Array<string | null> | null;
          photos?: Array<string | null> | null;
          likesCount: number;
          id: number;
          isDeleted: boolean;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};

export type User_GetBrandsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BrandsFilterInput>;
  order?: InputMaybe<Array<BrandsSortInput> | BrandsSortInput>;
}>;

export type User_GetBrandsQuery = {
  __typename?: 'Query';
  user_getBrands?: {
    __typename?: 'ListResponseBaseOfBrands';
    status: ResponseStatus;
    result?: {
      __typename?: 'BrandsCollectionSegment';
      totalCount: number;
      items?: Array<{
        __typename?: 'Brands';
        sizes?: Array<any | null> | null;
        name?: string | null;
        thumbnail?: string | null;
        likesCount: number;
        photos?: Array<string | null> | null;
        id: number;
        isDeleted: boolean;
        userBrands?: Array<{
          __typename?: 'UserBrands';
          userId: number;
          brandId: number;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          brand?: {
            __typename?: 'Brands';
            sizes?: Array<any | null> | null;
            name?: string | null;
            thumbnail?: string | null;
            likesCount: number;
            photos?: Array<string | null> | null;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
        brandLikes?: Array<{
          __typename?: 'BrandLikes';
          userId: number;
          brandId: number;
          liked: boolean;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          brand?: {
            __typename?: 'Brands';
            sizes?: Array<any | null> | null;
            name?: string | null;
            thumbnail?: string | null;
            likesCount: number;
            photos?: Array<string | null> | null;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
        posts?: Array<{
          __typename?: 'Posts';
          title?: string | null;
          content?: string | null;
          photo?: string | null;
          brandId?: number | null;
          styleId?: number | null;
          postType: PostTypes;
          sizeTag: number;
          posterId: number;
          postedAt: any;
          id: number;
          isDeleted: boolean;
          brand?: {
            __typename?: 'Brands';
            sizes?: Array<any | null> | null;
            name?: string | null;
            thumbnail?: string | null;
            likesCount: number;
            photos?: Array<string | null> | null;
            id: number;
            isDeleted: boolean;
          } | null;
          style?: {
            __typename?: 'Styles';
            name?: string | null;
            thumbnail?: string | null;
            colors?: Array<string | null> | null;
            photos?: Array<string | null> | null;
            likesCount: number;
            id: number;
            isDeleted: boolean;
          } | null;
          postLikes?: Array<{
            __typename?: 'PostLikes';
            userId: number;
            postId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          poster?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          likes?: Array<{
            __typename?: 'PostLikes';
            userId: number;
            postId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null> | null;
        styleBrands?: Array<{
          __typename?: 'StyleBrands';
          styleId: number;
          brandId: number;
          id: number;
          isDeleted: boolean;
          style?: {
            __typename?: 'Styles';
            name?: string | null;
            thumbnail?: string | null;
            colors?: Array<string | null> | null;
            photos?: Array<string | null> | null;
            likesCount: number;
            id: number;
            isDeleted: boolean;
          } | null;
          brand?: {
            __typename?: 'Brands';
            sizes?: Array<any | null> | null;
            name?: string | null;
            thumbnail?: string | null;
            likesCount: number;
            photos?: Array<string | null> | null;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
      } | null> | null;
      pageInfo: {
        __typename?: 'CollectionSegmentInfo';
        hasNextPage: boolean;
        hasPreviousPage: boolean;
      };
    } | null;
  } | null;
};

export type User_GetInspoQueryVariables = Exact<{
  inspoId: Scalars['Int'];
}>;

export type User_GetInspoQuery = {
  __typename?: 'Query';
  user_getInspo?: {
    __typename?: 'ResponseBaseOfUserDto';
    status: ResponseStatus;
    result?: {
      __typename?: 'UserDto';
      fullName?: string | null;
      accountType: AccountTypes;
      email?: string | null;
      phone?: string | null;
      bio?: string | null;
      socials?: Array<{
        __typename?: 'UserSocials';
        socialNetworks: SocialNetworks;
        address?: string | null;
        userId: number;
        id: number;
        isDeleted: boolean;
        user?: {
          __typename?: 'Users';
          fullName?: string | null;
          accountType: AccountTypes;
          email?: string | null;
          phone?: string | null;
          bio?: string | null;
          externalId?: string | null;
          id: number;
          isDeleted: boolean;
          postLikes?: Array<{
            __typename?: 'PostLikes';
            userId: number;
            postId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          socials?: Array<{
            __typename?: 'UserSocials';
            socialNetworks: SocialNetworks;
            address?: string | null;
            userId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          closets?: Array<{
            __typename?: 'Closets';
            userId: number;
            outfitName?: string | null;
            photo?: string | null;
            createdAt: any;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          userBrands?: Array<{
            __typename?: 'UserBrands';
            userId: number;
            brandId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          brandLikes?: Array<{
            __typename?: 'BrandLikes';
            userId: number;
            brandId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          userStyles?: Array<{
            __typename?: 'UserStyles';
            userId: number;
            styleId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          styleLikes?: Array<{
            __typename?: 'StyleLikes';
            userId: number;
            styleId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null;
      } | null> | null;
      brands?: Array<{
        __typename?: 'Brands';
        sizes?: Array<any | null> | null;
        name?: string | null;
        thumbnail?: string | null;
        likesCount: number;
        photos?: Array<string | null> | null;
        id: number;
        isDeleted: boolean;
        userBrands?: Array<{
          __typename?: 'UserBrands';
          userId: number;
          brandId: number;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          brand?: {
            __typename?: 'Brands';
            sizes?: Array<any | null> | null;
            name?: string | null;
            thumbnail?: string | null;
            likesCount: number;
            photos?: Array<string | null> | null;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
        brandLikes?: Array<{
          __typename?: 'BrandLikes';
          userId: number;
          brandId: number;
          liked: boolean;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          brand?: {
            __typename?: 'Brands';
            sizes?: Array<any | null> | null;
            name?: string | null;
            thumbnail?: string | null;
            likesCount: number;
            photos?: Array<string | null> | null;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
        posts?: Array<{
          __typename?: 'Posts';
          title?: string | null;
          content?: string | null;
          photo?: string | null;
          brandId?: number | null;
          styleId?: number | null;
          postType: PostTypes;
          sizeTag: number;
          posterId: number;
          postedAt: any;
          id: number;
          isDeleted: boolean;
          brand?: {
            __typename?: 'Brands';
            sizes?: Array<any | null> | null;
            name?: string | null;
            thumbnail?: string | null;
            likesCount: number;
            photos?: Array<string | null> | null;
            id: number;
            isDeleted: boolean;
          } | null;
          style?: {
            __typename?: 'Styles';
            name?: string | null;
            thumbnail?: string | null;
            colors?: Array<string | null> | null;
            photos?: Array<string | null> | null;
            likesCount: number;
            id: number;
            isDeleted: boolean;
          } | null;
          postLikes?: Array<{
            __typename?: 'PostLikes';
            userId: number;
            postId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          poster?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          likes?: Array<{
            __typename?: 'PostLikes';
            userId: number;
            postId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null> | null;
        styleBrands?: Array<{
          __typename?: 'StyleBrands';
          styleId: number;
          brandId: number;
          id: number;
          isDeleted: boolean;
          style?: {
            __typename?: 'Styles';
            name?: string | null;
            thumbnail?: string | null;
            colors?: Array<string | null> | null;
            photos?: Array<string | null> | null;
            likesCount: number;
            id: number;
            isDeleted: boolean;
          } | null;
          brand?: {
            __typename?: 'Brands';
            sizes?: Array<any | null> | null;
            name?: string | null;
            thumbnail?: string | null;
            likesCount: number;
            photos?: Array<string | null> | null;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
      } | null> | null;
      closets?: Array<{
        __typename?: 'Closets';
        userId: number;
        outfitName?: string | null;
        photo?: string | null;
        createdAt: any;
        id: number;
        isDeleted: boolean;
        user?: {
          __typename?: 'Users';
          fullName?: string | null;
          accountType: AccountTypes;
          email?: string | null;
          phone?: string | null;
          bio?: string | null;
          externalId?: string | null;
          id: number;
          isDeleted: boolean;
        } | null;
        closetItems?: Array<{
          __typename?: 'ClosetItems';
          closetId: number;
          name?: string | null;
          url?: string | null;
          xCoordinate: any;
          yCoordinate: any;
          id: number;
          isDeleted: boolean;
          closet?: {
            __typename?: 'Closets';
            userId: number;
            outfitName?: string | null;
            photo?: string | null;
            createdAt: any;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
      } | null> | null;
    } | null;
  } | null;
};

export type User_GetInsposQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UsersFilterInput>;
  order?: InputMaybe<Array<UsersSortInput> | UsersSortInput>;
  isCommon: Scalars['Boolean'];
  isRandom: Scalars['Boolean'];
}>;

export type User_GetInsposQuery = {
  __typename?: 'Query';
  user_getInspos?: {
    __typename?: 'ListResponseBaseOfUsers';
    status: ResponseStatus;
    result?: {
      __typename?: 'UsersCollectionSegment';
      totalCount: number;
      items?: Array<{
        __typename?: 'Users';
        fullName?: string | null;
        accountType: AccountTypes;
        email?: string | null;
        phone?: string | null;
        bio?: string | null;
        externalId?: string | null;
        id: number;
        isDeleted: boolean;
        postLikes?: Array<{
          __typename?: 'PostLikes';
          userId: number;
          postId: number;
          liked: boolean;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          post?: {
            __typename?: 'Posts';
            title?: string | null;
            content?: string | null;
            photo?: string | null;
            brandId?: number | null;
            styleId?: number | null;
            postType: PostTypes;
            sizeTag: number;
            posterId: number;
            postedAt: any;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
        socials?: Array<{
          __typename?: 'UserSocials';
          socialNetworks: SocialNetworks;
          address?: string | null;
          userId: number;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
        closets?: Array<{
          __typename?: 'Closets';
          userId: number;
          outfitName?: string | null;
          photo?: string | null;
          createdAt: any;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          closetItems?: Array<{
            __typename?: 'ClosetItems';
            closetId: number;
            name?: string | null;
            url?: string | null;
            xCoordinate: any;
            yCoordinate: any;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null> | null;
        userBrands?: Array<{
          __typename?: 'UserBrands';
          userId: number;
          brandId: number;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          brand?: {
            __typename?: 'Brands';
            sizes?: Array<any | null> | null;
            name?: string | null;
            thumbnail?: string | null;
            likesCount: number;
            photos?: Array<string | null> | null;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
        brandLikes?: Array<{
          __typename?: 'BrandLikes';
          userId: number;
          brandId: number;
          liked: boolean;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          brand?: {
            __typename?: 'Brands';
            sizes?: Array<any | null> | null;
            name?: string | null;
            thumbnail?: string | null;
            likesCount: number;
            photos?: Array<string | null> | null;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
        userStyles?: Array<{
          __typename?: 'UserStyles';
          userId: number;
          styleId: number;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          style?: {
            __typename?: 'Styles';
            name?: string | null;
            thumbnail?: string | null;
            colors?: Array<string | null> | null;
            photos?: Array<string | null> | null;
            likesCount: number;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
        styleLikes?: Array<{
          __typename?: 'StyleLikes';
          userId: number;
          styleId: number;
          liked: boolean;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          style?: {
            __typename?: 'Styles';
            name?: string | null;
            thumbnail?: string | null;
            colors?: Array<string | null> | null;
            photos?: Array<string | null> | null;
            likesCount: number;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
      } | null> | null;
      pageInfo: {
        __typename?: 'CollectionSegmentInfo';
        hasNextPage: boolean;
        hasPreviousPage: boolean;
      };
    } | null;
  } | null;
};

export type User_GetSelectedInsposQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UsersFilterInput>;
  order?: InputMaybe<Array<UsersSortInput> | UsersSortInput>;
}>;

export type User_GetSelectedInsposQuery = {
  __typename?: 'Query';
  user_getSelectedInspos?: {
    __typename?: 'ListResponseBaseOfUsers';
    status: ResponseStatus;
    result?: {
      __typename?: 'UsersCollectionSegment';
      totalCount: number;
      items?: Array<{
        __typename?: 'Users';
        fullName?: string | null;
        accountType: AccountTypes;
        email?: string | null;
        phone?: string | null;
        bio?: string | null;
        externalId?: string | null;
        id: number;
        isDeleted: boolean;
        postLikes?: Array<{
          __typename?: 'PostLikes';
          userId: number;
          postId: number;
          liked: boolean;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          post?: {
            __typename?: 'Posts';
            title?: string | null;
            content?: string | null;
            photo?: string | null;
            brandId?: number | null;
            styleId?: number | null;
            postType: PostTypes;
            sizeTag: number;
            posterId: number;
            postedAt: any;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
        socials?: Array<{
          __typename?: 'UserSocials';
          socialNetworks: SocialNetworks;
          address?: string | null;
          userId: number;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
        closets?: Array<{
          __typename?: 'Closets';
          userId: number;
          outfitName?: string | null;
          photo?: string | null;
          createdAt: any;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          closetItems?: Array<{
            __typename?: 'ClosetItems';
            closetId: number;
            name?: string | null;
            url?: string | null;
            xCoordinate: any;
            yCoordinate: any;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null> | null;
        userBrands?: Array<{
          __typename?: 'UserBrands';
          userId: number;
          brandId: number;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          brand?: {
            __typename?: 'Brands';
            sizes?: Array<any | null> | null;
            name?: string | null;
            thumbnail?: string | null;
            likesCount: number;
            photos?: Array<string | null> | null;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
        brandLikes?: Array<{
          __typename?: 'BrandLikes';
          userId: number;
          brandId: number;
          liked: boolean;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          brand?: {
            __typename?: 'Brands';
            sizes?: Array<any | null> | null;
            name?: string | null;
            thumbnail?: string | null;
            likesCount: number;
            photos?: Array<string | null> | null;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
        userStyles?: Array<{
          __typename?: 'UserStyles';
          userId: number;
          styleId: number;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          style?: {
            __typename?: 'Styles';
            name?: string | null;
            thumbnail?: string | null;
            colors?: Array<string | null> | null;
            photos?: Array<string | null> | null;
            likesCount: number;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
        styleLikes?: Array<{
          __typename?: 'StyleLikes';
          userId: number;
          styleId: number;
          liked: boolean;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          style?: {
            __typename?: 'Styles';
            name?: string | null;
            thumbnail?: string | null;
            colors?: Array<string | null> | null;
            photos?: Array<string | null> | null;
            likesCount: number;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
      } | null> | null;
      pageInfo: {
        __typename?: 'CollectionSegmentInfo';
        hasNextPage: boolean;
        hasPreviousPage: boolean;
      };
    } | null;
  } | null;
};

export type User_GetStylesQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StylesFilterInput>;
  order?: InputMaybe<Array<StylesSortInput> | StylesSortInput>;
}>;

export type User_GetStylesQuery = {
  __typename?: 'Query';
  user_getStyles?: {
    __typename?: 'ListResponseBaseOfStyles';
    status: ResponseStatus;
    result?: {
      __typename?: 'StylesCollectionSegment';
      totalCount: number;
      items?: Array<{
        __typename?: 'Styles';
        id: number;
        name?: string | null;
        thumbnail?: string | null;
        colors?: Array<string | null> | null;
        photos?: Array<string | null> | null;
        likesCount: number;
        isDeleted: boolean;
        styleBrands?: Array<{
          __typename?: 'StyleBrands';
          styleId: number;
          brandId: number;
          id: number;
          isDeleted: boolean;
          style?: {
            __typename?: 'Styles';
            name?: string | null;
            thumbnail?: string | null;
            colors?: Array<string | null> | null;
            photos?: Array<string | null> | null;
            likesCount: number;
            id: number;
            isDeleted: boolean;
          } | null;
          brand?: {
            __typename?: 'Brands';
            sizes?: Array<any | null> | null;
            name?: string | null;
            thumbnail?: string | null;
            likesCount: number;
            photos?: Array<string | null> | null;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
        posts?: Array<{
          __typename?: 'Posts';
          title?: string | null;
          content?: string | null;
          photo?: string | null;
          brandId?: number | null;
          styleId?: number | null;
          postType: PostTypes;
          sizeTag: number;
          posterId: number;
          postedAt: any;
          id: number;
          isDeleted: boolean;
          brand?: {
            __typename?: 'Brands';
            sizes?: Array<any | null> | null;
            name?: string | null;
            thumbnail?: string | null;
            likesCount: number;
            photos?: Array<string | null> | null;
            id: number;
            isDeleted: boolean;
          } | null;
          style?: {
            __typename?: 'Styles';
            name?: string | null;
            thumbnail?: string | null;
            colors?: Array<string | null> | null;
            photos?: Array<string | null> | null;
            likesCount: number;
            id: number;
            isDeleted: boolean;
          } | null;
          postLikes?: Array<{
            __typename?: 'PostLikes';
            userId: number;
            postId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          poster?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          likes?: Array<{
            __typename?: 'PostLikes';
            userId: number;
            postId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null> | null;
        userStyles?: Array<{
          __typename?: 'UserStyles';
          userId: number;
          styleId: number;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          style?: {
            __typename?: 'Styles';
            name?: string | null;
            thumbnail?: string | null;
            colors?: Array<string | null> | null;
            photos?: Array<string | null> | null;
            likesCount: number;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
        styleLikes?: Array<{
          __typename?: 'StyleLikes';
          userId: number;
          styleId: number;
          liked: boolean;
          id: number;
          isDeleted: boolean;
          user?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          style?: {
            __typename?: 'Styles';
            name?: string | null;
            thumbnail?: string | null;
            colors?: Array<string | null> | null;
            photos?: Array<string | null> | null;
            likesCount: number;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
      } | null> | null;
      pageInfo: {
        __typename?: 'CollectionSegmentInfo';
        hasNextPage: boolean;
        hasPreviousPage: boolean;
      };
    } | null;
  } | null;
};

export type User_LoginQueryVariables = Exact<{[key: string]: never}>;

export type User_LoginQuery = {
  __typename?: 'Query';
  user_login?: {
    __typename?: 'ResponseBaseOfUsers';
    status: ResponseStatus;
    result?: {
      __typename?: 'Users';
      fullName?: string | null;
      accountType: AccountTypes;
      email?: string | null;
      phone?: string | null;
      bio?: string | null;
      externalId?: string | null;
      id: number;
      isDeleted: boolean;
      postLikes?: Array<{
        __typename?: 'PostLikes';
        userId: number;
        postId: number;
        liked: boolean;
        id: number;
        isDeleted: boolean;
        user?: {
          __typename?: 'Users';
          fullName?: string | null;
          accountType: AccountTypes;
          email?: string | null;
          phone?: string | null;
          bio?: string | null;
          externalId?: string | null;
          id: number;
          isDeleted: boolean;
          postLikes?: Array<{
            __typename?: 'PostLikes';
            userId: number;
            postId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          socials?: Array<{
            __typename?: 'UserSocials';
            socialNetworks: SocialNetworks;
            address?: string | null;
            userId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          closets?: Array<{
            __typename?: 'Closets';
            userId: number;
            outfitName?: string | null;
            photo?: string | null;
            createdAt: any;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          userBrands?: Array<{
            __typename?: 'UserBrands';
            userId: number;
            brandId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          brandLikes?: Array<{
            __typename?: 'BrandLikes';
            userId: number;
            brandId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          userStyles?: Array<{
            __typename?: 'UserStyles';
            userId: number;
            styleId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          styleLikes?: Array<{
            __typename?: 'StyleLikes';
            userId: number;
            styleId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null;
        post?: {
          __typename?: 'Posts';
          title?: string | null;
          content?: string | null;
          photo?: string | null;
          brandId?: number | null;
          styleId?: number | null;
          postType: PostTypes;
          sizeTag: number;
          posterId: number;
          postedAt: any;
          id: number;
          isDeleted: boolean;
          brand?: {
            __typename?: 'Brands';
            sizes?: Array<any | null> | null;
            name?: string | null;
            thumbnail?: string | null;
            likesCount: number;
            photos?: Array<string | null> | null;
            id: number;
            isDeleted: boolean;
          } | null;
          style?: {
            __typename?: 'Styles';
            name?: string | null;
            thumbnail?: string | null;
            colors?: Array<string | null> | null;
            photos?: Array<string | null> | null;
            likesCount: number;
            id: number;
            isDeleted: boolean;
          } | null;
          postLikes?: Array<{
            __typename?: 'PostLikes';
            userId: number;
            postId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          poster?: {
            __typename?: 'Users';
            fullName?: string | null;
            accountType: AccountTypes;
            email?: string | null;
            phone?: string | null;
            bio?: string | null;
            externalId?: string | null;
            id: number;
            isDeleted: boolean;
          } | null;
          likes?: Array<{
            __typename?: 'PostLikes';
            userId: number;
            postId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null;
      } | null> | null;
      socials?: Array<{
        __typename?: 'UserSocials';
        socialNetworks: SocialNetworks;
        address?: string | null;
        userId: number;
        id: number;
        isDeleted: boolean;
        user?: {
          __typename?: 'Users';
          fullName?: string | null;
          accountType: AccountTypes;
          email?: string | null;
          phone?: string | null;
          bio?: string | null;
          externalId?: string | null;
          id: number;
          isDeleted: boolean;
        } | null;
      } | null> | null;
      closets?: Array<{
        __typename?: 'Closets';
        userId: number;
        outfitName?: string | null;
        photo?: string | null;
        createdAt: any;
        id: number;
        isDeleted: boolean;
        user?: {
          __typename?: 'Users';
          fullName?: string | null;
          accountType: AccountTypes;
          email?: string | null;
          phone?: string | null;
          bio?: string | null;
          externalId?: string | null;
          id: number;
          isDeleted: boolean;
        } | null;
        closetItems?: Array<{
          __typename?: 'ClosetItems';
          closetId: number;
          name?: string | null;
          url?: string | null;
          xCoordinate: any;
          yCoordinate: any;
          id: number;
          isDeleted: boolean;
          closet?: {
            __typename?: 'Closets';
            userId: number;
            outfitName?: string | null;
            photo?: string | null;
            createdAt: any;
            id: number;
            isDeleted: boolean;
          } | null;
        } | null> | null;
      } | null> | null;
      userBrands?: Array<{
        __typename?: 'UserBrands';
        userId: number;
        brandId: number;
        id: number;
        isDeleted: boolean;
        user?: {
          __typename?: 'Users';
          fullName?: string | null;
          accountType: AccountTypes;
          email?: string | null;
          phone?: string | null;
          bio?: string | null;
          externalId?: string | null;
          id: number;
          isDeleted: boolean;
        } | null;
        brand?: {
          __typename?: 'Brands';
          sizes?: Array<any | null> | null;
          name?: string | null;
          thumbnail?: string | null;
          likesCount: number;
          photos?: Array<string | null> | null;
          id: number;
          isDeleted: boolean;
          userBrands?: Array<{
            __typename?: 'UserBrands';
            userId: number;
            brandId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          brandLikes?: Array<{
            __typename?: 'BrandLikes';
            userId: number;
            brandId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          posts?: Array<{
            __typename?: 'Posts';
            title?: string | null;
            content?: string | null;
            photo?: string | null;
            brandId?: number | null;
            styleId?: number | null;
            postType: PostTypes;
            sizeTag: number;
            posterId: number;
            postedAt: any;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          styleBrands?: Array<{
            __typename?: 'StyleBrands';
            styleId: number;
            brandId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null;
      } | null> | null;
      brandLikes?: Array<{
        __typename?: 'BrandLikes';
        userId: number;
        brandId: number;
        liked: boolean;
        id: number;
        isDeleted: boolean;
        user?: {
          __typename?: 'Users';
          fullName?: string | null;
          accountType: AccountTypes;
          email?: string | null;
          phone?: string | null;
          bio?: string | null;
          externalId?: string | null;
          id: number;
          isDeleted: boolean;
        } | null;
        brand?: {
          __typename?: 'Brands';
          sizes?: Array<any | null> | null;
          name?: string | null;
          thumbnail?: string | null;
          likesCount: number;
          photos?: Array<string | null> | null;
          id: number;
          isDeleted: boolean;
        } | null;
      } | null> | null;
      userStyles?: Array<{
        __typename?: 'UserStyles';
        userId: number;
        styleId: number;
        id: number;
        isDeleted: boolean;
        user?: {
          __typename?: 'Users';
          fullName?: string | null;
          accountType: AccountTypes;
          email?: string | null;
          phone?: string | null;
          bio?: string | null;
          externalId?: string | null;
          id: number;
          isDeleted: boolean;
        } | null;
        style?: {
          __typename?: 'Styles';
          name?: string | null;
          thumbnail?: string | null;
          colors?: Array<string | null> | null;
          photos?: Array<string | null> | null;
          likesCount: number;
          id: number;
          isDeleted: boolean;
          styleBrands?: Array<{
            __typename?: 'StyleBrands';
            styleId: number;
            brandId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          posts?: Array<{
            __typename?: 'Posts';
            title?: string | null;
            content?: string | null;
            photo?: string | null;
            brandId?: number | null;
            styleId?: number | null;
            postType: PostTypes;
            sizeTag: number;
            posterId: number;
            postedAt: any;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          userStyles?: Array<{
            __typename?: 'UserStyles';
            userId: number;
            styleId: number;
            id: number;
            isDeleted: boolean;
          } | null> | null;
          styleLikes?: Array<{
            __typename?: 'StyleLikes';
            userId: number;
            styleId: number;
            liked: boolean;
            id: number;
            isDeleted: boolean;
          } | null> | null;
        } | null;
      } | null> | null;
      styleLikes?: Array<{
        __typename?: 'StyleLikes';
        userId: number;
        styleId: number;
        liked: boolean;
        id: number;
        isDeleted: boolean;
        user?: {
          __typename?: 'Users';
          fullName?: string | null;
          accountType: AccountTypes;
          email?: string | null;
          phone?: string | null;
          bio?: string | null;
          externalId?: string | null;
          id: number;
          isDeleted: boolean;
        } | null;
        style?: {
          __typename?: 'Styles';
          name?: string | null;
          thumbnail?: string | null;
          colors?: Array<string | null> | null;
          photos?: Array<string | null> | null;
          likesCount: number;
          id: number;
          isDeleted: boolean;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};
