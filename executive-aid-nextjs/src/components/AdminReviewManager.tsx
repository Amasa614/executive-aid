'use client';

import { useState, useEffect, useCallback } from 'react';
import { Eye, Check, X, Star, Trash2 } from 'lucide-react';
import type { Review } from '@/lib/supabase';

export default function AdminReviewManager() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved'>('all');

  const fetchReviews = useCallback(async () => {
    try {
      const { supabase } = await import('@/lib/supabase');
      
      let query = supabase.from('executive_aid_reviews').select('*');
      
      if (filter === 'pending') {
        query = query.eq('approved', false);
      } else if (filter === 'approved') {
        query = query.eq('approved', true);
      }
      
      const { data, error } = await query.order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching reviews:', error);
        return;
      }

      setReviews(data || []);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setIsLoading(false);
    }
  }, [filter]);


  const rejectReview = async (id: number) => {
    try {
      const { supabase } = await import('@/lib/supabase');
      
      const { error } = await supabase
        .from('executive_aid_reviews')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting review:', error);
        return;
      }

      await fetchReviews(); // Refresh the list
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  const toggleApproval = async (id: number, currentStatus: boolean) => {
    try {
      const { supabase } = await import('@/lib/supabase');
      
      const { error } = await supabase
        .from('executive_aid_reviews')
        .update({ approved: !currentStatus })
        .eq('id', id);

      if (error) {
        console.error('Error updating review:', error);
        return;
      }

      await fetchReviews(); // Refresh the list
    } catch (error) {
      console.error('Error updating review:', error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [filter, fetchReviews]);

  const filteredReviews = reviews.filter(review => {
    if (filter === 'pending') return !review.approved;
    if (filter === 'approved') return review.approved;
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Review Management</h1>
        
        {/* Filter Tabs */}
        <div className="flex space-x-4 mb-6 border-b">
          <button
            onClick={() => setFilter('all')}
            className={`pb-2 px-1 font-medium ${
              filter === 'all'
                ? 'border-b-2 border-indigo-500 text-indigo-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            All Reviews ({reviews.length})
          </button>
          <button
            onClick={() => setFilter('pending')}
            className={`pb-2 px-1 font-medium ${
              filter === 'pending'
                ? 'border-b-2 border-orange-500 text-orange-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Pending ({reviews.filter(r => !r.approved).length})
          </button>
          <button
            onClick={() => setFilter('approved')}
            className={`pb-2 px-1 font-medium ${
              filter === 'approved'
                ? 'border-b-2 border-green-500 text-green-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Approved ({reviews.filter(r => r.approved).length})
          </button>
        </div>

        {/* Reviews List */}
        {isLoading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto"></div>
            <p className="mt-2 text-gray-500">Loading reviews...</p>
          </div>
        ) : filteredReviews.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <Eye className="h-12 w-12 mx-auto mb-4 text-gray-300" />
            <p>No reviews found for this filter.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredReviews.map((review) => (
              <div
                key={review.id}
                className={`border rounded-lg p-4 ${
                  review.approved ? 'border-green-200 bg-green-50' : 'border-orange-200 bg-orange-50'
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      {review.client_name}
                    </h3>
                    {review.email && (
                      <p className="text-sm text-gray-600">{review.email}</p>
                    )}
                    <p className="text-sm text-gray-500">
                      {new Date(review.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium">({review.rating}/5)</span>
                  </div>
                </div>

                <div className="mb-3">
                  <p className="text-sm font-medium text-gray-700 mb-1">Service:</p>
                  <p className="text-sm text-gray-600">{review.service_type}</p>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-1">Review:</p>
                  <p className="text-gray-600">&ldquo;{review.comment}&rdquo;</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        review.approved
                          ? 'bg-green-100 text-green-800'
                          : 'bg-orange-100 text-orange-800'
                      }`}
                    >
                      {review.approved ? 'Approved' : 'Pending'}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleApproval(review.id, review.approved)}
                      className={`flex items-center space-x-1 px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                        review.approved
                          ? 'bg-orange-100 text-orange-700 hover:bg-orange-200'
                          : 'bg-green-100 text-green-700 hover:bg-green-200'
                      }`}
                    >
                      {review.approved ? (
                        <>
                          <X className="h-4 w-4" />
                          <span>Unapprove</span>
                        </>
                      ) : (
                        <>
                          <Check className="h-4 w-4" />
                          <span>Approve</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => rejectReview(review.id)}
                      className="flex items-center space-x-1 px-3 py-1 rounded-md text-sm font-medium bg-red-100 text-red-700 hover:bg-red-200 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
